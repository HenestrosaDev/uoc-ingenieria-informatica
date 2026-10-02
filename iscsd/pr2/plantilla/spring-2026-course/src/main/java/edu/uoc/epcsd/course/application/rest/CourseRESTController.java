package edu.uoc.epcsd.course.application.rest;

import edu.uoc.epcsd.course.application.rest.request.CourseRequest;
import edu.uoc.epcsd.course.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.util.List;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/courses")
public class CourseRESTController {

	private final CourseService courseService;

	@GetMapping("/{courseId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Course> getCourseById(@PathVariable @NotNull Long courseId) {
		log.trace("getCourseById");

		//TODO Complete the implementation   
		return null;
	}

	// TODO findCourses()
	// TODO getEnrollmentsByCourse()
	// TODO getEnrolledStudents()
	// TODO createCourse()
	// TODO modifyCourseDetails()
	// TODO openEnrollment()
	// TODO closeEnrollment()
	// TODO enrollInCourse()
	// TODO closeGradeReports()
	// TODO closeCourse()


}
