package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
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
    
    @Override
    public List<Course> findCourses() {
        return jpaCourseRepository.findAll().stream().map(CourseEntity::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<Course> getCourseById(Long courseId) {
        return jpaCourseRepository.getCourseById(courseId).map(CourseEntity::toDomain);
    }   

    @Override
    public Long createCourse(Course course) {

		CourseEntity courseEntity = CourseEntity.fromDomain(course);
        courseEntity.setInstructor(course.getInstructor());
        courseEntity.setStatus(course.getStatus());
        
        return jpaCourseRepository.save(courseEntity).getId(); 
    }

	@Override
	public Long modifyCourseDetails(Course course) {
        
		CourseEntity courseEntity = jpaCourseRepository.findById(course.getId()).orElseThrow(IllegalArgumentException::new);
        
        courseEntity.setInstructor(course.getInstructor());        
        courseEntity.setTitle(course.getTitle());       
        courseEntity.setDescription(course.getDescription());
        courseEntity.setEnrollmentStartDate(course.getEnrollmentStartDate());        
        courseEntity.setEnrollmentEndDate(course.getEnrollmentEndDate());
        courseEntity.setMode(course.getMode());        
        courseEntity.setPrice(course.getPrice());
        courseEntity.setObjectives(course.getObjectives());        
        courseEntity.setMethology(course.getMethology());
        courseEntity.setDuration(course.getDuration());        
        courseEntity.setLanguage(course.getLanguage());
        courseEntity.setLocation(course.getLocation());    
        
        return jpaCourseRepository.save(courseEntity).getId(); 
	}

	@Override
	public Long openEnrollmentCourse(Course course) {
        
        CourseEntity courseEntity = jpaCourseRepository.findById(course.getId()).orElseThrow(IllegalArgumentException::new);       
        courseEntity.setStatus(course.getStatus());    
        
        return jpaCourseRepository.save(courseEntity).getId(); 
	} 

	@Override
	public Long closeEnrollmentCourse(Course course) {
        
        CourseEntity courseEntity = jpaCourseRepository.findById(course.getId()).orElseThrow(IllegalArgumentException::new);       
        courseEntity.setStatus(course.getStatus());    
        
        return jpaCourseRepository.save(courseEntity).getId(); 
	} 
	
	@Override
	public Long closeGradeReports(Course course) {
        
        CourseEntity courseEntity = jpaCourseRepository.findById(course.getId()).orElseThrow(IllegalArgumentException::new);       
        courseEntity.setStatus(course.getStatus());    
        
        return jpaCourseRepository.save(courseEntity).getId(); 
	}
	@Override
	public Long enrollInCourse(Course course) {

        CourseEntity courseEntity = jpaCourseRepository.findById(course.getId()).orElseThrow(IllegalArgumentException::new);       
        courseEntity.setEnrollment(courseEntity.getEnrollment());    
        
        return jpaCourseRepository.save(courseEntity).getId();
        
	} 
	    
}
