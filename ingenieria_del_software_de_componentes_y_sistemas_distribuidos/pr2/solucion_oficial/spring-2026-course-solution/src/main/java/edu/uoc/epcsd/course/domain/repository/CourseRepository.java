package edu.uoc.epcsd.course.domain.repository;

import edu.uoc.epcsd.course.domain.Course;

import java.util.List;
import java.util.Optional;

public interface CourseRepository {

    Long createCourse(Course course);
    
    Long modifyCourseDetails(Course course);
	
	Long openEnrollmentCourse(Course course);

	Long closeEnrollmentCourse(Course course);

	Long enrollInCourse(Course course);
	
	Long closeGradeReports(Course course);
	
	List<Course> findCourses();

	Optional<Course> getCourseById(Long courseId);
	
}
