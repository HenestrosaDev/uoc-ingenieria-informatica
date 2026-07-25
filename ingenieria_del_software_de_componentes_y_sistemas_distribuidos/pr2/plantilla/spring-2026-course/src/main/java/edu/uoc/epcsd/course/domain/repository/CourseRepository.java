package edu.uoc.epcsd.course.domain.repository;

import edu.uoc.epcsd.course.domain.Course;

import java.util.List;
import java.util.Optional;

public interface CourseRepository {

	Optional<Course> getCourseById(Long courseId);

}
