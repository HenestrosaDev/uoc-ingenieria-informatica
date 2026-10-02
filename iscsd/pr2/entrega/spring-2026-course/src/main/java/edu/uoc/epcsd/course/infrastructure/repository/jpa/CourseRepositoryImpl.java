package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.exception.CourseNotFoundException;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import static edu.uoc.epcsd.course.domain.CourseStatus.ACTIVE;
import static edu.uoc.epcsd.course.domain.CourseStatus.CLOSED;
import static edu.uoc.epcsd.course.domain.CourseStatus.ENROLLMENT_OPEN;
import static edu.uoc.epcsd.course.domain.CourseStatus.PENDING_CLOSURE;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CourseRepositoryImpl implements CourseRepository {

	private final SpringDataCourseRepository jpaCourseRepository;

	/**
	 * Retrieves a course by its unique identifier.
	 *
	 * @param courseId the unique identifier of the course to retrieve
	 * @return an Optional containing the Course if found, or empty otherwise
	 */
	@Override
	public Optional<Course> getCourseById(Long courseId) {
		return jpaCourseRepository.getCourseById(courseId).map(CourseEntity::toDomain);
	}

	/**
	 * Retrieves all courses from the repository.
	 *
	 * @return a list of all Course objects in the system
	 */
	@Override
	public List<Course> findCourses() {
		return jpaCourseRepository.findAll().stream().map(CourseEntity::toDomain).collect(Collectors.toList());
	}

	/**
	 * Creates a new course with the provided information.
	 * Validates that no course with the same title already exists (case-insensitive check).
	 * If a duplicate title is found, throws an IllegalArgumentException.
	 *
	 * @param course the Course entity to create
	 * @return the unique identifier of the newly created course
	 * @throws IllegalArgumentException if a course with the same title already exists
	 */
	@Override
	public Long createCourse(Course course) {
		boolean duplicateTitle = jpaCourseRepository.findAll().stream()
			.anyMatch(existingCourse -> existingCourse.getTitle().equalsIgnoreCase(course.getTitle()));

		if (duplicateTitle) {
			throw new IllegalArgumentException("A course with title '" + course.getTitle() + "' already exists");
		}

		CourseEntity courseEntity = CourseEntity.fromDomain(course);
		return jpaCourseRepository.save(courseEntity).getId();
	}

	/**
	 * Updates the details of an existing course.
	 * Only modifies the course information (title, description, dates, etc.),
	 * not the status or enrollment information.
	 *
	 * @param course the Course object containing updated information
	 * @throws CourseNotFoundException if the course with the given ID does not exist
	 */
	@Override
	public void modifyCourseDetails(Course course) {
		CourseEntity courseEntity = jpaCourseRepository.findById(course.getId())
			.orElseThrow(() -> new CourseNotFoundException(course.getId()));

		courseEntity.updateDetailsFrom(course);

		jpaCourseRepository.save(courseEntity);
	}

	/**
	 * Opens enrollment for a specific course.
	 * Changes the course status from PENDING to ENROLLMENT_OPEN.
	 * Throws an exception if enrollment is already open.
	 *
	 * @param courseId the unique identifier of the course
	 * @throws CourseNotFoundException if the course does not exist
	 * @throws IllegalArgumentException if enrollment is already open for the course
	 */
	@Override
	public void openEnrollment(Long courseId) {
		CourseEntity courseEntity = jpaCourseRepository.findById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		if (courseEntity.getStatus() == ENROLLMENT_OPEN) {
			throw new IllegalArgumentException("Enrollment is already open for course " + courseId);
		}

		courseEntity.setStatus(ENROLLMENT_OPEN);
		jpaCourseRepository.save(courseEntity);
	}

	/**
	 * Closes enrollment for a specific course.
	 * Changes the course status from ENROLLMENT_OPEN to ACTIVE.
	 * Throws an exception if enrollment is not currently open.
	 *
	 * @param courseId the unique identifier of the course
	 * @throws CourseNotFoundException if the course does not exist
	 * @throws IllegalArgumentException if enrollment is not open for the course
	 */
	@Override
	public void closeEnrollment(Long courseId) {
		CourseEntity courseEntity = jpaCourseRepository.findById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		if (courseEntity.getStatus() != ENROLLMENT_OPEN) {
			throw new IllegalArgumentException("Enrollment is not open for course " + courseId);
		}

		courseEntity.setStatus(ACTIVE);
		jpaCourseRepository.save(courseEntity);
	}

	/**
	 * Closes grade reports for a specific course.
	 * Changes the course status to PENDING_CLOSURE after grade submissions are complete.
	 * This operation must occur before the course can be fully closed.
	 *
	 * @param courseId the unique identifier of the course
	 * @throws CourseNotFoundException if the course does not exist
	 */
	@Override
	public void closeGradeReports(Long courseId) {
		CourseEntity courseEntity = jpaCourseRepository.findById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));
		courseEntity.setStatus(PENDING_CLOSURE);
		jpaCourseRepository.save(courseEntity);
	}

	/**
	 * Closes a specific course.
	 * Changes the course status from PENDING_CLOSURE to CLOSED.
	 * A course can only be closed after grade reports have been closed.
	 * Throws an exception if the course is not in PENDING_CLOSURE status.
	 *
	 * @param courseId the unique identifier of the course to close
	 * @throws CourseNotFoundException if the course does not exist
	 * @throws IllegalArgumentException if the course is not in PENDING_CLOSURE status
	 */
	@Override
	public void closeCourse(Long courseId) {
		CourseEntity courseEntity = jpaCourseRepository.findById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		if (courseEntity.getStatus() != PENDING_CLOSURE) {
			throw new IllegalArgumentException("Course " + courseId + " cannot be closed until grade reports are processed");
		}

		courseEntity.setStatus(CLOSED);
		jpaCourseRepository.save(courseEntity);
	}

}
