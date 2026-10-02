package edu.uoc.epcsd.course.domain.repository;

import edu.uoc.epcsd.course.domain.Course;

import java.util.List;
import java.util.Optional;

public interface CourseRepository {

	Optional<Course> getCourseById(Long courseId);

	List<Course> findCourses();

	Long createCourse(Course course);

	void modifyCourseDetails(Course course);

	void openEnrollment(Long courseId);

	void closeEnrollment(Long courseId);

	void closeGradeReports(Long courseId);

	void closeCourse(Long courseId);

}
