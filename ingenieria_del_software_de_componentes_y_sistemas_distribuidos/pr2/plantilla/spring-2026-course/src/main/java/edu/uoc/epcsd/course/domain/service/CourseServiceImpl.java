package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import edu.uoc.epcsd.course.infrastructure.repository.jpa.EnrollmentEntity;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class CourseServiceImpl implements CourseService {

	private final CourseRepository courseRepository;
	private final UserRepository userRepository;
	private final EnrollmentRepository enrollmentRepository;
	private final EnrollmentService enrollmentService;

	@Value("${userService.getUserByEmail.url}")
	private String usersServiceUrl;

	@Value("${credentialService.create.url}")
	private String microcredentialServiceUrl;


	@Override
	public Optional<Course> getCourseById(Long courseId) {

		return Optional.of(courseRepository.getCourseById(courseId).orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!")));

	}

	// TODO findCourses()
	// TODO getEnrollmentsByCourse()
	// TODO getEnrolledStudents()
	// TODO createCourse()
	// TODO modifyCourseDetails()
	// TODO openEnrollment()
	// TODO closeEnrollment()
	// TODO enrollInCourse()
	// TODO closeGradeReports()
	// TODO closeCourse()

}
