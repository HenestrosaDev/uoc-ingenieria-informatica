package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.EnrollmentStatus;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import edu.uoc.epcsd.course.infrastructure.repository.jpa.EnrollmentEntity;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class EnrollmentServiceImpl implements EnrollmentService {

	private final EnrollmentRepository enrollmentRepository;
	private final CourseRepository courseRepository;
	private final UserRepository userRepository;

	@Override
	public List<Enrollment> getEnrollmentsByCourse(Long courseId) {
		return enrollmentRepository.findEnrollmentByCourse(courseId);
	}

	public List<Enrollment> findAllEnrollment() {
		return enrollmentRepository.findAllEnrollment();
	}

	public Optional<Enrollment> getEnrollmentByStudent(String userEmail) {
		return enrollmentRepository.findEnrollmentByStudent(userEmail);
	}

	public Long createEnrollment(Enrollment enrollment) {
		return enrollmentRepository.createEnrollment(enrollment);
	}

	public void modifyEnrollment(Enrollment enrollment) {
		enrollmentRepository.updateEnrollment(enrollment);
	}

	public void enrollInCourse(Long courseId, String student) {
		Enrollment enrollment = Enrollment.builder()
				.courseId(courseId)
				.student(student)
				.enrollmentDate(new java.util.Date())
				.qualification(0L)
				.status(EnrollmentStatus.ACTIVE)
				.build();
		enrollmentRepository.createEnrollment(enrollment);
	}

}
