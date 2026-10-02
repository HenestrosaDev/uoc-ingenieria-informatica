package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EnrollmentRepositoryImpl implements EnrollmentRepository {

    private final SpringDataEnrollmentRepository jpaRepository;
    private final SpringDataCourseRepository jpaCourseRepository;
	
    @Override
    public Optional<Enrollment> getEnrollmentById(Long Id) {
        return jpaRepository.findEnrollmentById(Id).map(EnrollmentEntity::toDomain);
    }   

    @Override
    public List<Enrollment> findAllEnrollment() {
        return jpaRepository.findAll().stream().map(EnrollmentEntity::toDomain).collect(Collectors.toList());
    }
    
    @Override
    public Optional<Enrollment> findEnrollmentByStudent(String userEmail) {

        return jpaRepository.findEnrollmentByStudent(userEmail).map(EnrollmentEntity::toDomain);
    }	
	
    @Override
    public List<Enrollment> findEnrollmentByCourse(Long Id) {

        return jpaRepository.findEnrollmentEntitiesByCourse(jpaCourseRepository.getById(Id)).stream().map(EnrollmentEntity::toDomain).collect(Collectors.toList());
    }	   

    @Override
    public Long createEnrollment(Enrollment enrollment) {

        EnrollmentEntity enrollmentEntity = EnrollmentEntity.fromDomain(enrollment);
        enrollmentEntity.setCourse(jpaCourseRepository.findById(enrollment.getCourseId()).orElseThrow(IllegalArgumentException::new));

        return jpaRepository.save(enrollmentEntity).getId();
    }

    @Override
    public Long updateEnrollment(Enrollment enrollment) {

        EnrollmentEntity enrollmentEntity = jpaRepository.findById(enrollment.getId()).orElseThrow(IllegalArgumentException::new);
        
        enrollmentEntity.setStudent(enrollment.getStudent());        
        enrollmentEntity.setQualification(enrollment.getQualification());       
        enrollmentEntity.setStatus(enrollment.getStatus());
        enrollmentEntity.setEnrollmentDate(enrollment.getEnrollmentDate());         
        
        return jpaRepository.save(enrollmentEntity).getId();

    }	
 
}
