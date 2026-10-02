package edu.uoc.epcsd.course.application.rest;

import edu.uoc.epcsd.course.application.rest.request.CourseRequest;
import edu.uoc.epcsd.course.application.rest.request.EnrollmentRequest;
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
import javax.validation.constraints.NotBlank;
import java.net.URI;
import java.util.List;
import java.util.ArrayList;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/courses")
public class CourseRESTController {

	private final CourseService courseService;

	/**
	 * Retrieves a specific course by its unique identifier.
	 * Returns HTTP 200 OK with the course data if found,
	 * or HTTP 404 NOT FOUND if the course does not exist.
	 *
	 * @param courseId the unique identifier of the course to retrieve
	 * @return ResponseEntity containing the Course if found, or a not found response
	 */
	@GetMapping("/{courseId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Course> getCourseById(@PathVariable @NotNull Long courseId) {
		log.trace("getCourseById");
		return courseService.getCourseById(courseId)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	/**
	 * Retrieves all courses available in the system.
	 * Returns HTTP 200 OK with a list of all courses.
	 *
	 * @return ResponseEntity containing a list of all Course objects
	 */
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Course>> findCourses() {
		log.trace("findCourses");
		return ResponseEntity.ok(courseService.findCourses());
	}

	/**
	 * Retrieves all enrollments for a specific course.
	 * Returns HTTP 200 OK with a list of enrollments associated with the course.
	 *
	 * @param courseId the unique identifier of the course
	 * @return ResponseEntity containing a list of Enrollment objects for the course
	 */
	@GetMapping("/{courseId}/enrollments")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Enrollment>> getEnrollmentsByCourse(@PathVariable @NotNull Long courseId) {
		log.trace("getEnrollmentsByCourse");
		return ResponseEntity.ok(courseService.getEnrollmentsByCourse(courseId));
	}

	/**
	 * Retrieves the list of student identifiers enrolled in a specific course.
	 * Returns HTTP 200 OK with a list of enrolled student names or identifiers.
	 *
	 * @param courseId the unique identifier of the course
	 * @return ResponseEntity containing a list of enrolled student identifiers
	 */
	@GetMapping("/{courseId}/enrolled-students")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<String>> getEnrolledStudents(@PathVariable @NotNull Long courseId) {
		log.trace("getEnrolledStudents");
		return ResponseEntity.ok(courseService.getEnrolledStudents(courseId));
	}

	/**
	 * Creates a new course with the provided course details.
	 * Returns HTTP 201 CREATED with the URI of the newly created course and its ID.
	 *
	 * @param courseRequest contains the course details (title, description, dates, etc.)
	 * @return ResponseEntity with HTTP 201 CREATED status and the new course ID
	 */
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Long> createCourse(@Valid @RequestBody CourseRequest courseRequest) {
		log.trace("createCourse");
		Course course = Course.builder()
				.instructor(courseRequest.getInstructor())
				.title(courseRequest.getTitle())
				.description(courseRequest.getDescription())
				.enrollmentStartDate(courseRequest.getEnrollmentStartDate())
				.enrollmentEndDate(courseRequest.getEnrollmentEndDate())
				.mode(courseRequest.getMode())
				.price(courseRequest.getPrice())
				.objectives(courseRequest.getObjectives())
				.methology(courseRequest.getMethology())
				.duration(courseRequest.getDuration())
				.language(courseRequest.getLanguage())
				.location(courseRequest.getLocation())
				.enrollment(new ArrayList<>())
				.build();
		Long courseId = courseService.createCourse(course);
		return ResponseEntity.created(
				ServletUriComponentsBuilder.fromCurrentRequest()
						.path("/{id}")
						.buildAndExpand(courseId)
						.toUri()
		).body(courseId);
	}

	/**
	 * Updates the details of an existing course.
	 * Modifies course information such as title, description, dates, instructor, etc.
	 * Returns HTTP 200 OK on successful update.
	 *
	 * @param courseId the unique identifier of the course to modify
	 * @param courseRequest contains the updated course details
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@PutMapping("/{courseId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> modifyCourseDetails(@PathVariable @NotNull Long courseId, @Valid @RequestBody CourseRequest courseRequest) {
		log.trace("modifyCourseDetails");
		Course course = Course.builder()
				.id(courseId)
				.instructor(courseRequest.getInstructor())
				.title(courseRequest.getTitle())
				.description(courseRequest.getDescription())
				.enrollmentStartDate(courseRequest.getEnrollmentStartDate())
				.enrollmentEndDate(courseRequest.getEnrollmentEndDate())
				.mode(courseRequest.getMode())
				.price(courseRequest.getPrice())
				.objectives(courseRequest.getObjectives())
				.methology(courseRequest.getMethology())
				.duration(courseRequest.getDuration())
				.language(courseRequest.getLanguage())
				.location(courseRequest.getLocation())
				.build();
		courseService.modifyCourseDetails(course);
		return ResponseEntity.ok().build();
	}

	/**
	 * Opens enrollment for a specific course.
	 * Changes the course status to ENROLLMENT_OPEN, allowing students to enroll.
	 * Returns HTTP 200 OK on successful operation.
	 *
	 * @param courseId the unique identifier of the course for which to open enrollment
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@PostMapping("/{courseId}/open-enrollment")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> openEnrollment(@PathVariable @NotNull Long courseId) {
		log.trace("openEnrollment");
		courseService.openEnrollment(courseId);
		return ResponseEntity.ok().build();
	}

	/**
	 * Closes enrollment for a specific course.
	 * Changes the course status to ACTIVE, preventing new student enrollments.
	 * Returns HTTP 200 OK on successful operation.
	 *
	 * @param courseId the unique identifier of the course for which to close enrollment
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@PostMapping("/{courseId}/close-enrollment")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> closeEnrollment(@PathVariable @NotNull Long courseId) {
		log.trace("closeEnrollment");
		courseService.closeEnrollment(courseId);
		return ResponseEntity.ok().build();
	}

	/**
	 * Enrolls a student in a specific course.
	 * Adds the student to the enrollment list for the course.
	 * Returns HTTP 201 CREATED on successful enrollment.
	 *
	 * @param courseId the unique identifier of the course
	 * @param student the student identifier or email to enroll
	 * @return ResponseEntity with HTTP 201 CREATED status
	 */
	@PostMapping("/{courseId}/enroll")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Void> enrollInCourse(@PathVariable @NotNull Long courseId, @RequestParam @NotBlank String student) {
		log.trace("enrollInCourse");
		courseService.enrollInCourse(courseId, student);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	/**
	 * Closes grade reports for a specific course.
	 * Changes the course status to PENDING_CLOSURE after all grades have been submitted.
	 * Supports both PATCH and POST HTTP methods.
	 * Returns HTTP 200 OK on successful operation.
	 *
	 * @param courseId the unique identifier of the course
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@RequestMapping(value = "/{courseId}/close-grades", method = {RequestMethod.PATCH, RequestMethod.POST})
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> closeGradeReports(@PathVariable @NotNull Long courseId) {
		log.trace("closeGradeReports");
		courseService.closeGradeReports(courseId);
		return ResponseEntity.ok().build();
	}

	/**
	 * Closes a specific course.
	 * This operation finalizes the course, transitioning it from PENDING_CLOSURE to CLOSED status.
	 * A course can only be closed after grade reports have been closed.
	 * Supports both PATCH and POST HTTP methods.
	 * Returns HTTP 200 OK with a boolean indicating success.
	 *
	 * @param courseId the unique identifier of the course to close
	 * @return ResponseEntity containing true if the course was successfully closed, false otherwise
	 */
	@RequestMapping(value = "/{courseId}/close", method = {RequestMethod.PATCH, RequestMethod.POST})
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Boolean> closeCourse(@PathVariable @NotNull Long courseId) {
		log.trace("closeCourse");
		boolean closed = courseService.closeCourse(courseId);
		return ResponseEntity.ok(closed);
	}
}
