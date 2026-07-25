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
    public List<Enrollment> findAllEnrollment() {
        return enrollmentRepository.findAllEnrollment();
    }

    @Override
    public List<Enrollment> getEnrollmentsByCourse(Long courseId) {
    	
            return enrollmentRepository.findEnrollmentByCourse(courseId);
    }

    @Override
    public Optional<Enrollment> getEnrollmentByStudent(String userEmail) {
    	
            return enrollmentRepository.findEnrollmentByStudent(userEmail);
        }

    @Override
    public Long createEnrollment(Enrollment enrollment) {
    	
    	enrollment.setStatus(EnrollmentStatus.ACTIVE);
    	return enrollmentRepository.createEnrollment(enrollment);
    }
   
    @Override
    public Long modifyEnrollment(String userEmail, Date enrollmentDate, Long qualification, EnrollmentStatus status) {
         
    	Enrollment enrollment = enrollmentRepository
                .findEnrollmentByStudent(userEmail)
                .orElseThrow(() -> new IllegalArgumentException("The "+userEmail+" student does not exist!"));
       
    	enrollment.setEnrollmentDate(enrollmentDate);        
    	enrollment.setQualification(qualification);
    	enrollment.setStatus(status);
        
        return enrollmentRepository.updateEnrollment(enrollment);
    }

    @Override
    public Enrollment enrollInCourse(Long courseId, String userEmail) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        if (!course.getStatus().equals(CourseStatus.ENROLLMENT_OPEN)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in the registration period !");
        }
        
		if (!userRepository.findUserByEmail(userEmail)) {
            throw new IllegalArgumentException(userEmail+" dont no exists !");
        }
               		
        List<Enrollment> enrollStudents = enrollmentRepository.findEnrollmentByCourse(courseId);
		if (null != enrollStudents) {      		
			for (int i = 0; i < enrollStudents.size(); i++) {
				if (enrollStudents.get(i).getStudent().equals(userEmail)) {
					throw new IllegalArgumentException(userEmail+" was already registered !");
				}  
			}
		}

		Enrollment enroll = Enrollment.builder()
                .student(userEmail)                               
                .enrollmentDate(Date.valueOf(LocalDate.now()))
                .qualification((long)0)
                .courseId(courseId)
                .status(EnrollmentStatus.ACTIVE)
                .build(); 

        enrollmentRepository.createEnrollment(enroll);
        return enroll;
    }

    @Override
    public Long closeCourse(Long courseId) {
    	
    	List<Enrollment> enrollment = enrollmentRepository.findEnrollmentByCourse(courseId);
        
    	for (int i = 0; i < enrollment.size(); i++) {   		   	        
    		enrollment.get(i).setStatus(EnrollmentStatus.CLOSED);  
    		enrollmentRepository.updateEnrollment(enrollment.get(i));    		
    	}
    	
    	return courseId;
    
    }
}
