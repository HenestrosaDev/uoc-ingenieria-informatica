package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.Enrollment;

import java.util.Date;

import java.util.List;
import java.util.Optional;

public interface CourseService {

	Optional<Course> getCourseById(Long courseId);

}
