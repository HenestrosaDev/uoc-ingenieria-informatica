package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.EnrollmentStatus;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface EnrollmentService {

    List<Enrollment> findAllEnrollment();

    List<Enrollment> getEnrollmentsByCourse(Long courseId);
    
	Optional<Enrollment> getEnrollmentByStudent(String userEmail);

	Long createEnrollment(Enrollment enrollment);
    
	Long modifyEnrollment(String userEmail, Date enrollmentDate, Long qualification, EnrollmentStatus status);
    
	Enrollment enrollInCourse(Long courseId, String userEmail);
    
    Long closeCourse(Long courseId);

}
