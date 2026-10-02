package edu.uoc.epcsd.microcredential.domain.service;

import edu.uoc.epcsd.microcredential.domain.Course;
import edu.uoc.epcsd.microcredential.domain.CourseStatus;
import edu.uoc.epcsd.microcredential.domain.Enrollment;
import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;
import edu.uoc.epcsd.microcredential.domain.repository.MicrocredentialRepository;
import edu.uoc.epcsd.microcredential.infrastructure.kafka.KafkaConstants;
import edu.uoc.epcsd.microcredential.infrastructure.kafka.MicrocredentialMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.constraints.NotNull;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
@Validated
public class MicrocredentialServiceImpl implements MicrocredentialService {

    private final MicrocredentialRepository microcredentialRepository;
	private final KafkaTemplate<String, MicrocredentialMessage> microcredentialKafkaTemplate;

    @Value("${courseService.url}")
    private String courseServiceUrl;

	@Value("${enrollmentService.getEnrollmentById.url}")
	private String enrollmentServiceUrl;
    
    @Override
    public Long approvePendingMicrocredential(Long microcredentialId) {
        Microcredential microcredential = microcredentialRepository
                .getMicrocredentialById(microcredentialId)
                .orElseThrow(() -> new IllegalArgumentException("The "+microcredentialId+"th microcredential does not exist!"));
        
        if (!microcredential.getStatus().equals(MicrocredentialStatus.REQUESTED)) {
            throw new IllegalArgumentException("The microcredential " + microcredentialId + " is not in the request period !");
        }
        
        microcredential.setStatus(MicrocredentialStatus.GRANTED);           	                            
        
        Enrollment enrollment = new RestTemplate().exchange(enrollmentServiceUrl, HttpMethod.GET, null,new ParameterizedTypeReference<Enrollment>() {}, microcredentialId).getBody();
		if(enrollment == null || enrollment.getStudent().isEmpty()){
			throw new IllegalArgumentException("The microcredential " + microcredentialId + " does not have a valid enrollment!");
		}
		microcredentialKafkaTemplate.send(KafkaConstants.MICROCREDENTIAL_TOPIC + KafkaConstants.SEPARATOR + KafkaConstants.APPROVED, MicrocredentialMessage.builder()
			.microcredentialId(microcredentialId)
			.userEmail(enrollment.getStudent())
			.courseId(enrollment.getCourseId())
			.enrollment(enrollment.getId())
			.build());
        return microcredentialRepository.updateStatusPendingMicrocredential(microcredential);
    }
    
    @Override
    public Long rejectPendingMicrocredential(Long microcredentialId) {
        Microcredential microcredential = microcredentialRepository
                .getMicrocredentialById(microcredentialId)
                .orElseThrow(() -> new IllegalArgumentException("The "+microcredentialId+"th microcredential does not exist!"));
        
        if (!microcredential.getStatus().equals(MicrocredentialStatus.REQUESTED)) {
            throw new IllegalArgumentException("The microcredential " + microcredentialId + " is not in the request period !");
        }
        
        microcredential.setStatus(MicrocredentialStatus.REJECTED);        
        
        Enrollment enrollment = new RestTemplate().exchange(enrollmentServiceUrl, HttpMethod.GET, null,new ParameterizedTypeReference<Enrollment>() {}, microcredentialId).getBody();
       
		if(enrollment == null || enrollment.getStudent().isEmpty()){
			throw new IllegalArgumentException("The microcredential " + microcredentialId + " does not have a valid enrollment!");
		}
		microcredentialKafkaTemplate.send(KafkaConstants.MICROCREDENTIAL_TOPIC + KafkaConstants.SEPARATOR + KafkaConstants.REJECTED, MicrocredentialMessage.builder()
			.microcredentialId(microcredentialId)
			.userEmail(enrollment.getStudent())
			.courseId(enrollment.getCourseId())
			.enrollment(enrollment.getId())
			.build());
        return microcredentialRepository.updateStatusPendingMicrocredential(microcredential);
    }

	@Override
	public Boolean requestCourseMicrocredentials(@NotNull Long courseId) {
		Course course;
		try {
			course = new RestTemplate().getForEntity(courseServiceUrl + "/{courseId}", Course.class, courseId).getBody();
			course = Optional.ofNullable(course)
				.orElseThrow(() -> new IllegalArgumentException(
						"The " + courseId + "th course does not exist!"
				));

		} catch (HttpClientErrorException.NotFound ex) {
			throw new IllegalArgumentException(
					"The " + courseId + "th course does not exist!", ex
			);
		}
		if(!course.getStatus().equals(CourseStatus.CLOSED)){
			throw new IllegalArgumentException(
					"The " + courseId + "th course is not closed");
		}
        
		List<Enrollment> enrollments = new RestTemplate().exchange(courseServiceUrl + "/{courseId}/enrollments", HttpMethod.GET, null,new ParameterizedTypeReference<List<Enrollment>>() {}, courseId).getBody();
        
		for (Enrollment enrollment : enrollments) {
			if(enrollment.getQualification() != null){
				Microcredential microcredential = Microcredential.builder()              
					.enrollment(enrollment.getId())
					.assignmentDate(new Date())
					.build();
				Long microcredentialId = microcredentialRepository.createMicrocredential(microcredential);
				microcredentialKafkaTemplate.send(KafkaConstants.MICROCREDENTIAL_TOPIC + KafkaConstants.SEPARATOR + KafkaConstants.PENDING, MicrocredentialMessage.builder()
				.microcredentialId(microcredentialId)
				.userEmail(enrollment.getStudent())
				.courseId(enrollment.getCourseId())
				.enrollment(enrollment.getId())
				.build());
			} else {
				throw new IllegalArgumentException(
					"The " + courseId + "th course qualifications are not completed");
			}
		}
		return true;
	}
	
	 @Override public Optional<Microcredential> getMicrocredentialById(Long microcredentialId) {
	  
	 return Optional.of(microcredentialRepository.getMicrocredentialById(microcredentialId).orElseThrow(() -> new IllegalArgumentException("The "
	  +microcredentialId+"th microcredential does not exist!")));
	  
	}

	@Override
	public List<Microcredential> getPendingMicrocredentialRequests() {
        return microcredentialRepository.getPendingMicrocredentialRequests();             
	}
    
}
