package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.EnrollmentStatus;
import edu.uoc.epcsd.course.infrastructure.repository.jpa.EnrollmentEntity;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

public interface EnrollmentService {

	List<Enrollment> getEnrollmentsByCourse(Long courseId);

}
