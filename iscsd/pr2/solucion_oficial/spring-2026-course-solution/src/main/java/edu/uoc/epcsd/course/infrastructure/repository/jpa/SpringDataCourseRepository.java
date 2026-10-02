package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataCourseRepository extends JpaRepository<CourseEntity, Long> {

	@Query("select a from course a where a.instructor = ?1 ")
	public List<CourseEntity> findCourseByUser(String email);
	
	//@Query("select a from course a where a.id = ?1 ")
	public Optional<CourseEntity> getCourseById(Long id);
    
}
