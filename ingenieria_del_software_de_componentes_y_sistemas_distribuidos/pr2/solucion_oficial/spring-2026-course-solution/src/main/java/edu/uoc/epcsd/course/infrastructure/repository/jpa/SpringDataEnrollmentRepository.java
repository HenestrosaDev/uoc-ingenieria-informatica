package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataEnrollmentRepository extends JpaRepository<EnrollmentEntity, Long> {

    public Optional<EnrollmentEntity> findEnrollmentById(Long id);

    public Optional<EnrollmentEntity> findEnrollmentByStudent(String userEmail);

    @Query("select a from enrollment a where course_id = ?1 ")
    public List<EnrollmentEntity> findEnrollmentByCourse(Long courseId);
    
    //with JPA naming convention
    public List<EnrollmentEntity> findEnrollmentEntitiesByCourse(CourseEntity courseEntity);

}
