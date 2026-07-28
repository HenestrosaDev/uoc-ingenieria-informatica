package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.Enrollment;

import java.util.Date;

import java.util.List;
import java.util.Optional;

public interface CourseService {

    List<Course> findCourses();

    List<Enrollment> getEnrollmentsByCourse(Long courseId);

    List<GetUserResponse> getEnrolledStudents(Long courseId);
    
	Optional<Course> getCourseById(Long courseId);
    
    Optional<Enrollment> getEnrollmentById(Long enrollmentId);

	Long createCourse(Course courseId);
    
    Long modifyCourseDetails(Long courseId, String instructor, String title, String description, Date enrollmentStartDate, Date enrollmentEndDate, String mode, Long price,
    		String objectives, String methology, Long duration, String language, String location );
    
    Long openEnrollmentCourse(Long courseId);
    
    Long closeEnrollmentCourse(Long courseId);
 
    Long enrollInCourse(Long courseId, String userEmail);
    
    Long closeGradeReports(Long courseId);

    Long closeCourse(Long courseId);

}
