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

    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public List<Course> findCourses() {
        log.trace("findCourses");

        return courseService.findCourses();
    }
    
    @GetMapping("/{courseId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Course> getCourseById(@PathVariable @NotNull Long courseId) {
        log.trace("getCourseById");

        return courseService.getCourseById(courseId).map(session -> ResponseEntity.ok().body(session))
                .orElseThrow(() -> new IllegalArgumentException("The "+courseId+"th course does not exist!"));
    }

    
    @GetMapping("/{courseId}/enrollments")
    @ResponseStatus(HttpStatus.OK)
    public List<Enrollment> getEnrollmentsByCourse(@PathVariable @NotNull Long courseId) {
        log.trace("getEnrollmentsByCourse");
        return courseService.getEnrollmentsByCourse(courseId);
    }
    
	@GetMapping("/{enrollmentId}/enrollment")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Enrollment> getEnrollmentById(@PathVariable @NotNull Long enrollmentId) {
        log.trace("getEnrollmentById");
        return courseService.getEnrollmentById(enrollmentId).map(session -> ResponseEntity.ok().body(session))
                .orElseThrow(() -> new IllegalArgumentException("The "+enrollmentId+"th enrollment does not exist!"));
    }
    
	@GetMapping("/{courseId}/students")
    @ResponseStatus(HttpStatus.OK)
    public List<GetUserResponse> getEnrolledStudents(@PathVariable @NotNull Long courseId) {
        log.trace("getEnrolledStudents");
        return courseService.getEnrolledStudents(courseId);
    }
    
    @PostMapping("/")
    public ResponseEntity<Long> createCourse(@RequestBody @Valid CourseRequest createCourseRequest) {
        log.trace("createCourse");

        try {
            log.trace("Creating Course " + createCourseRequest);
            Long courseId = courseService.createCourse(Course.builder()
                    .instructor(createCourseRequest.getInstructor())                               
                    .title(createCourseRequest.getTitle())
                    .description(createCourseRequest.getDescription())
                    .enrollmentStartDate(createCourseRequest.getEnrollmentStartDate())
                    .enrollmentEndDate(createCourseRequest.getEnrollmentEndDate())
                    .mode(createCourseRequest.getMode())
                    .price(createCourseRequest.getPrice())
                    .objectives(createCourseRequest.getObjectives())
                    .methology(createCourseRequest.getMethology())
                    .duration(createCourseRequest.getDuration())
                    .language(createCourseRequest.getLanguage())
                    .location(createCourseRequest.getLocation())
                    .build());  
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .path("/{userId}")
                    .buildAndExpand(courseId)
                    .toUri();

            return ResponseEntity.created(uri).body(courseId);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }

    @PutMapping("/{courseId}")
    public ResponseEntity<Boolean> modifyCourseDetails(@PathVariable @NotNull Long courseId, @RequestBody @Valid CourseRequest updateCourseRequest) {
        log.trace("modifyCourseDetails");
        log.info(courseId);
        try {
			log.trace("modify Course Details " + updateCourseRequest);
            courseService.modifyCourseDetails(courseId, updateCourseRequest.getInstructor(), updateCourseRequest.getTitle(), updateCourseRequest.getDescription(), 
            		updateCourseRequest.getEnrollmentStartDate(), updateCourseRequest.getEnrollmentEndDate(), updateCourseRequest.getMode(), 
            		updateCourseRequest.getPrice(), updateCourseRequest.getObjectives(), updateCourseRequest.getMethology(), updateCourseRequest.getDuration(), 
            		updateCourseRequest.getLanguage(), updateCourseRequest.getLocation());
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }

    }

    @PatchMapping("/{courseId}/openEnrollment")
    public ResponseEntity<Boolean> openEnrollment(@PathVariable @NotNull Long courseId) {
        log.trace("openEnrollment");
        try {
			log.trace("Open Enrollment Course number " + courseId);
            courseService.openEnrollmentCourse(courseId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }
 
    @PatchMapping("/{courseId}/closeEnrollment")
    public ResponseEntity<Boolean> closeEnrollment(@PathVariable @NotNull Long courseId) {
        log.trace("closeEnrollment");
        try {
			log.trace("close Enrollment Course number " +courseId);
            courseService.closeEnrollmentCourse(courseId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }
    
    @PostMapping("/{courseId}/{userEmail}")
    public ResponseEntity<Boolean> enrollInCourse(@PathVariable @NotNull Long courseId, @PathVariable @NotNull String userEmail) {
        log.trace("enrollInCourse");
        try {
			log.trace("Enrollment User "+userEmail+" in Course number " +courseId);
            courseService.enrollInCourse(courseId, userEmail);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }

    @PatchMapping("/{courseId}/closeGradeReports")
    public ResponseEntity<Boolean> closeGradeReports(@PathVariable @NotNull Long courseId) {
        log.trace("closeGradeReports");
        try {
			log.trace("close Grade Reports Course number " +courseId);
            courseService.closeGradeReports(courseId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    } 
    
    @PatchMapping("/{courseId}/closeCourse")
    public ResponseEntity<Boolean> closeCourse(@PathVariable @NotNull Long courseId) {
        log.trace("closeCourse");
        try {
			log.trace("close Course number " +courseId);
            courseService.closeCourse(courseId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }         
}
