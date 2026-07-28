package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
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
    public List<Course> findCourses() {
        return courseRepository.findCourses();
    }

    @Override
    public List<Enrollment> getEnrollmentsByCourse(Long courseId) {
    	courseRepository.getCourseById(courseId).orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        return enrollmentRepository.findEnrollmentByCourse(courseId);
    }

    @Override
    public List<GetUserResponse> getEnrolledStudents(Long courseId) {
    	courseRepository.getCourseById(courseId).orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        List<GetUserResponse> users = new ArrayList<GetUserResponse>();
        GetUserResponse userResponse;
        List<Enrollment> enrollments = enrollmentRepository.findEnrollmentByCourse(courseId);
        for (Enrollment enrollment : enrollments) {
            userResponse = new RestTemplate().getForEntity(usersServiceUrl, GetUserResponse.class, enrollment.getStudent()).getBody();
            users.add(userResponse);
        }
        return users;
    }

    @Override
    public Optional<Course> getCourseById(Long courseId) {
 
    	return Optional.of(courseRepository.getCourseById(courseId).orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!")));
    
    }
	
	@Override
    public Optional<Enrollment> getEnrollmentById(Long enrollmentId) {
    	return Optional.of(enrollmentRepository.getEnrollmentById(enrollmentId).orElseThrow(() -> new IllegalArgumentException("The "+enrollmentId+"th enrollment does not exist!")));
    }

    @Override
    public Long createCourse(Course course) {
    		
    	if (!userRepository.findInstructorByEmail(course.getInstructor())) {
            throw new UserNotFoundException(course.getInstructor());
        }
    	
    	course.setStatus(CourseStatus.DRAFT);
    	return courseRepository.createCourse(course);
    }

    @Override
    public Long modifyCourseDetails(Long courseId, String instructor, String title, String description, Date enrollmentStartDate, Date enrollmentEndDate, String mode, Long price,
    		String objectives, String methology, Long duration, String language, String location) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));

		if (!userRepository.findInstructorByEmail(instructor)) {
			throw new IllegalArgumentException("The instructor "+instructor+" dont no exist or he is not instructor !");
        }
        		
		course.setInstructor(instructor);        
        course.setTitle(title);       
        course.setDescription(description);
        course.setEnrollmentStartDate(enrollmentStartDate);        
        course.setEnrollmentEndDate(enrollmentEndDate);
        course.setMode(mode);        
        course.setPrice(price);
        course.setObjectives(objectives);        
        course.setMethology(methology);
        course.setDuration(duration);        
        course.setLanguage(language);
        course.setLocation(location);        
        
        return courseRepository.modifyCourseDetails(course);
    }

    @Override
    public Long openEnrollmentCourse(Long courseId) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        if (!course.getStatus().equals(CourseStatus.DRAFT)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in the Draft status !");
        }

        course.setStatus(CourseStatus.ENROLLMENT_OPEN);        
        
        return courseRepository.openEnrollmentCourse(course);
    }

    @Override
    public Long closeEnrollmentCourse(Long courseId) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        if (!course.getStatus().equals(CourseStatus.ENROLLMENT_OPEN)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in the registration period !");
        }
        
        course.setStatus(CourseStatus.ACTIVE);        
        
        return courseRepository.closeEnrollmentCourse(course);
    }

    @Override
    public Long enrollInCourse(Long courseId, String userEmail) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        if (!course.getStatus().equals(CourseStatus.ENROLLMENT_OPEN)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in the registration period !");
        }
        
		if (!userRepository.findUserByEmail(userEmail)) {
            throw new IllegalArgumentException(userEmail+" dont no exists !");
        } 
        
		
		List<Enrollment> enrollUser = course.getEnrollment();
		if (enrollUser == null)
		{
			enrollUser = new ArrayList<Enrollment>();
		}
        for (int i = 0; i < enrollUser.size(); i++) {
    		if (enrollUser.get(i).getStudent().equals(userEmail)) {
    			throw new IllegalArgumentException(userEmail+" was already registered !");
            }       		
          }       

		Enrollment enrollment = enrollmentService.enrollInCourse(courseId, userEmail);
		enrollUser.add(enrollment);  

        course.setEnrollment(enrollUser); 		        
        
        return courseRepository.enrollInCourse(course);        
        
    }

    @Override
    public Long closeGradeReports(Long courseId) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));

        if (!course.getStatus().equals(CourseStatus.ACTIVE)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in Active status !");
        }        
        
        course.setStatus(CourseStatus.PENDING_CLOSUE);        
        
        return courseRepository.closeGradeReports(course);
    }

    @Override
    public Long closeCourse(Long courseId) {
        Course course = courseRepository
                .getCourseById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
        
        if (!course.getStatus().equals(CourseStatus.PENDING_CLOSUE)) {
            throw new IllegalArgumentException("The course " +courseId+"th is not in Pending Closue status!");
        }
        
        course.setStatus(CourseStatus.CLOSED);        
		enrollmentService.closeCourse(courseId);
		
		Long courseResponse = courseRepository.closeEnrollmentCourse(course);
		
		     
        if (new RestTemplate().postForEntity(microcredentialServiceUrl,null, Boolean.class, courseId) == null) {
            throw new IllegalArgumentException("The microcredentials of " +courseId+"th have not been found!");
        }

		return courseResponse;
    }
    
}
