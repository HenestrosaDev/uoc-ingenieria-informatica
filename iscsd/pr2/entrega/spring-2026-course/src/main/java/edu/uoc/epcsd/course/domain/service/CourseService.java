package edu.uoc.epcsd.course.domain.service;

// getEnrolledStudents now returns a list of student emails (List<String>)
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.Enrollment;

import java.util.Date;

import java.util.List;
import java.util.Optional;

public interface CourseService {

	Optional<Course> getCourseById(Long courseId);

	List<Course> findCourses();

	List<Enrollment> getEnrollmentsByCourse(Long courseId);

	List<String> getEnrolledStudents(Long courseId);

	Long createCourse(Course course);

	void modifyCourseDetails(Course course);

	void openEnrollment(Long courseId);

	void closeEnrollment(Long courseId);

	void enrollInCourse(Long courseId, String student);

	void closeGradeReports(Long courseId);

	boolean closeCourse(Long courseId);

}
