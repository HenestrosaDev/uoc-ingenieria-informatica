package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CourseRepositoryImpl implements CourseRepository {

	private final SpringDataCourseRepository jpaCourseRepository;


	private final UserRepository userRepository;

	@Override
	public Optional<Course> getCourseById(Long courseId) {
		return jpaCourseRepository.getCourseById(courseId).map(CourseEntity::toDomain);
	}   

	//TODO findCourses()
	//TODO createCourse()
	//TODO modifyCourseDetails()
	//TODO openEnrollmentCourse()
	//TODO closeEnrollmentCourse()
	//TODO closeGradeReports()
	//TODO enrollInCourse()

}
