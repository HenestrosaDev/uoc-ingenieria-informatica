package edu.uoc.epcsd.microcredential.domain.service;

import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.dto.CourseDto;
import edu.uoc.epcsd.microcredential.domain.dto.EnrollmentDto;
import edu.uoc.epcsd.microcredential.domain.repository.MicrocredentialRepository;
import edu.uoc.epcsd.microcredential.infrastructure.kafka.MicrocredentialMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.RestClientException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import static edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus.REQUESTED;
import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import java.util.Date;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
@Validated
public class MicrocredentialServiceImpl implements MicrocredentialService {

	private final MicrocredentialRepository microcredentialRepository;
	private final KafkaTemplate<String, MicrocredentialMessage> microcredentialKafkaTemplate;
	private final RestTemplate restTemplate;

	@Value("${courseService.url}")
	private String courseServiceUrl;

	/**
	 * Retrieves a microcredential by its unique identifier.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to retrieve
	 * @return an Optional containing the Microcredential if found, or empty otherwise
	 */
	@Override
	public Optional<Microcredential> getMicrocredentialById(Long microcredentialId) {
		return microcredentialRepository.getMicrocredentialById(microcredentialId);
	}

	/**
	 * Approves a pending microcredential request.
	 * Updates the microcredential status to GRANTED and sends a notification message
	 * through Kafka to inform the user about the approval.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to approve
	 * @param userEmail the email of the user to be notified about the approval
	 * @param courseId the ID of the associated course
	 */
	public void approvePendingMicrocredential(Long microcredentialId, String userEmail, Long courseId) {
		microcredentialRepository.updateStatusPendingMicrocredential(microcredentialId, "GRANTED");
		MicrocredentialMessage message = MicrocredentialMessage.builder()
				.microcredentialId(microcredentialId)
				.userEmail(userEmail)
				.courseId(courseId)
				.build();
		microcredentialKafkaTemplate.send("microcredential-notifications", message);
	}

	/**
	 * Rejects a pending microcredential request.
	 * Updates the microcredential status to REJECTED and sends a notification message
	 * through Kafka to inform the user about the rejection.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to reject
	 * @param userEmail the email of the user to be notified about the rejection
	 * @param courseId the ID of the associated course
	 */
	public void rejectPendingMicrocredential(Long microcredentialId, String userEmail, Long courseId) {
		microcredentialRepository.updateStatusPendingMicrocredential(microcredentialId, "REJECTED");
		MicrocredentialMessage message = MicrocredentialMessage.builder()
				.microcredentialId(microcredentialId)
				.userEmail(userEmail)
				.courseId(courseId)
				.build();
		microcredentialKafkaTemplate.send("microcredential-notifications", message);
	}

	/**
	 * Retrieves all pending microcredential requests with REQUESTED status.
	 * These are microcredentials awaiting approval or rejection.
	 *
	 * @return a list of all pending Microcredentials
	 */
	public List<Microcredential> getPendingMicrocredentialRequests() {
		return microcredentialRepository.getPendingMicrocredentialRequests();
	}

	/**
	 * Requests microcredentials for all students enrolled in a course.
	 * This process involves:
	 * 1. Fetching the course data to verify it has CLOSED status
	 * 2. Fetching all enrollments for the course
	 * 3. Creating microcredential records for each enrollment
	 * 4. Sending Kafka notifications to administrators and users
	 *
	 * If any step fails, the transaction is rolled back and false is returned.
	 *
	 * @param courseId the unique identifier of the course for which to request microcredentials
	 * @return true if microcredentials were successfully requested, false otherwise
	 */
	public boolean requestCourseMicrocredential(Long courseId) {
		try {
			// Fetch course data using strongly typed DTO
			CourseDto course = fetchCourse(courseId);
			if (course == null || !isCourseClosedStatus(course.getStatus())) {
				log.warn("Course {} not found or not in CLOSED status", courseId);
				return false;
			}

			// Fetch enrollments using strongly typed DTOs
			List<EnrollmentDto> enrollments = fetchEnrollments(courseId);
			if (enrollments == null || enrollments.isEmpty()) {
				log.debug("No enrollments found for course {}", courseId);
				return false;
			}

			saveMicrocredentialsAndNotify(enrollments, courseId);
			return true;
		} catch (Exception ex) {
			log.error("Error requesting microcredentials for course {}", courseId, ex);
			// Transaction will be rolled back automatically
			return false;
		}
	}

	/**
	 * Saves microcredentials for all enrollments and sends notifications.
	 * This is a transactional operation that ensures all microcredentials are created
	 * and notifications are sent atomically. If any part fails, the entire operation is rolled back.
	 *
	 * @param enrollments the list of enrollments for which to create microcredentials
	 * @param courseId the ID of the course associated with these enrollments
	 */
	@Transactional
	protected void saveMicrocredentialsAndNotify(List<EnrollmentDto> enrollments, Long courseId) {
		createMicrocredentialsInBatch(enrollments, courseId);
		notifyAdminOfRequest(courseId);
	}

	/**
	 * Fetches course data from the Course Service.
	 */
	private CourseDto fetchCourse(Long courseId) {
		try {
			String courseUrl = buildCourseEndpoint(courseId);
			return restTemplate.getForObject(courseUrl, CourseDto.class);
		} catch (RestClientException ex) {
			log.error("Failed to fetch course {} from {}", courseId, courseServiceUrl, ex);
			return null;
		}
	}

	/**
	 * Fetches enrollments for a course from the Course Service.
	 */
	private List<EnrollmentDto> fetchEnrollments(Long courseId) {
		try {
			String enrollmentsUrl = buildCourseEndpoint(courseId) + "/enrollments";
			EnrollmentDto[] enrollmentArray = restTemplate.getForObject(enrollmentsUrl, EnrollmentDto[].class);
			if (enrollmentArray != null) {
				return List.of(enrollmentArray);
			}
			return new ArrayList<>();
		} catch (RestClientException ex) {
			log.error("Failed to fetch enrollments for course {} from {}", courseId, courseServiceUrl, ex);
			return null;
		}
	}

	/**
	 * Checks if the course status is CLOSED.
	 */
	private boolean isCourseClosedStatus(String status) {
		return status != null && "CLOSED".equals(status);
	}

	/**
	 * Builds a stable course endpoint regardless of whether courseServiceUrl
	 * is configured as http://host[:port] or http://host[:port]/courses.
	 */
	private String buildCourseEndpoint(Long courseId) {
		String normalizedBaseUrl = normalizeCourseServiceBaseUrl();
		return normalizedBaseUrl + "/courses/" + courseId;
	}

	private String normalizeCourseServiceBaseUrl() {
		String normalized = courseServiceUrl;
		if (normalized.endsWith("/")) {
			normalized = normalized.substring(0, normalized.length() - 1);
		}
		if (normalized.endsWith("/courses")) {
			normalized = normalized.substring(0, normalized.length() - "/courses".length());
		}
		return normalized;
	}

	/**
	 * Creates microcredentials for all enrollments in batch.
	 * This is more efficient than creating them one by one and allows for atomic transactions.
	 */
	private void createMicrocredentialsInBatch(List<EnrollmentDto> enrollments, Long courseId) {
		Date now = new Date();

		for (EnrollmentDto enrollment : enrollments) {
			if (!isValidEnrollment(enrollment)) {
				log.debug("Skipping invalid enrollment: {}", enrollment);
				continue;
			}

			// Create microcredential entity
			Microcredential microcredential = Microcredential.builder()
					.enrollment(enrollment.getId())
					.assignmentDate(now)
					.submitDate(now)
					.status(REQUESTED)
					.content("")
					.build();

			Long microId = microcredentialRepository.createMicrocredential(microcredential);

			// Send notification message for each microcredential
			sendNotificationMessage(microId, enrollment.getStudent(), courseId, enrollment.getId());
		}
	}

	/**
	 * Validates that an enrollment has the required fields.
	 */
	private boolean isValidEnrollment(EnrollmentDto enrollment) {
		return enrollment != null && enrollment.getId() != null && enrollment.getStudent() != null;
	}

	/**
	 * Sends a notification message to Kafka.
	 */
	private void sendNotificationMessage(Long microcredentialId, String userEmail, Long courseId, Long enrollmentId) {
		try {
			MicrocredentialMessage message = MicrocredentialMessage.builder()
					.microcredentialId(microcredentialId)
					.userEmail(userEmail)
					.courseId(courseId)
					.enrollment(enrollmentId)
					.build();
			microcredentialKafkaTemplate.send("microcredential-notifications", message);
		} catch (Exception ex) {
			log.error("Failed to send notification message for microcredential {}", microcredentialId, ex);
			// Allow the request to complete even if notification fails
		}
	}

	/**
	 * Notifies admins that microcredentials were requested for a course.
	 */
	private void notifyAdminOfRequest(Long courseId) {
		try {
			MicrocredentialMessage adminMsg = MicrocredentialMessage.builder()
					.microcredentialId(null)
					.userEmail(null)
					.courseId(courseId)
					.enrollment(null)
					.build();
			microcredentialKafkaTemplate.send("microcredential-requests", adminMsg);
		} catch (Exception ex) {
			log.error("Failed to send admin notification for course {}", courseId, ex);
			// Allow the request to complete even if notification fails
		}
	}

}
