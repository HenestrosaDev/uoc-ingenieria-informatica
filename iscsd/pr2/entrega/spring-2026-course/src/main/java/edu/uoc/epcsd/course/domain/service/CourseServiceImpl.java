package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.EnrollmentStatus;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.exception.CourseNotFoundException;
// RestTemplate removed: we now return student emails directly from enrollments
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class CourseServiceImpl implements CourseService {

	private final CourseRepository courseRepository;
	private final UserRepository userRepository;
	private final EnrollmentRepository enrollmentRepository;
	// no RestTemplate needed for retrieving emails


	@Override
	public Optional<Course> getCourseById(Long courseId) {
		return Optional.of(courseRepository.getCourseById(courseId).orElseThrow(() -> new CourseNotFoundException(courseId)));
	}

	@Override
	public List<Course> findCourses() {
		return courseRepository.findCourses();
	}

	@Override
	public List<Enrollment> getEnrollmentsByCourse(Long courseId) {
		courseRepository.getCourseById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		return enrollmentRepository.findEnrollmentByCourse(courseId);
	}

	@Override
	public List<String> getEnrolledStudents(Long courseId) {
		courseRepository.getCourseById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		List<Enrollment> enrollments = enrollmentRepository.findEnrollmentByCourse(courseId);
		List<String> students = new ArrayList<>();
		for (Enrollment enrollment : enrollments) {
			students.add(enrollment.getStudent());
		}

		return students;
	}

	@Override
	public Long createCourse(Course course) {
		if (userRepository.findInstructorByEmail(course.getInstructor())) {
			return courseRepository.createCourse(course);
		}
		throw new IllegalArgumentException("The user " + course.getInstructor() + " is not an instructor!");
	}

	@Override
	public void modifyCourseDetails(Course course) {
		courseRepository.modifyCourseDetails(course);
	}

	@Override
	public void openEnrollment(Long courseId) {
		courseRepository.openEnrollment(courseId);
	}

	@Override
	public void closeEnrollment(Long courseId) {
		courseRepository.closeEnrollment(courseId);
	}

	@Override
	public void enrollInCourse(Long courseId, String student) {
		Course course = courseRepository.getCourseById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		if (course.getStatus() != CourseStatus.ENROLLMENT_OPEN) {
			throw new IllegalArgumentException("Course " + courseId + " is not open for enrollment");
		}

		if (!userRepository.findUserByEmail(student)) {
			throw new UserNotFoundException(student);
		}

		Enrollment enrollment = Enrollment.builder()
				.courseId(courseId)
				.student(student)
				.enrollmentDate(new java.util.Date())
				.qualification(0L)
				.status(EnrollmentStatus.ACTIVE)
				.build();
		enrollmentRepository.createEnrollment(enrollment);
	}

	@Override
	public void closeGradeReports(Long courseId) {
		courseRepository.closeGradeReports(courseId);
	}

	@Override
	@Transactional
	public boolean closeCourse(Long courseId) {
		courseRepository.getCourseById(courseId)
			.orElseThrow(() -> new CourseNotFoundException(courseId));

		try {
			List<Enrollment> enrollments = enrollmentRepository.findEnrollmentByCourse(courseId);
			for (Enrollment enrollment : enrollments) {
				enrollment.setStatus(EnrollmentStatus.CLOSED);
				enrollmentRepository.updateEnrollment(enrollment);
			}

			courseRepository.closeCourse(courseId);
			return true;
		} catch (Exception ex) {
			return false;
		}
	}

}
