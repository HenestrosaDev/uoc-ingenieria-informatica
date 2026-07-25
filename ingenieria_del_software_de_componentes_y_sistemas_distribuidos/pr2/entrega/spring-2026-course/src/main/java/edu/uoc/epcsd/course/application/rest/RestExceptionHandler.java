package edu.uoc.epcsd.course.application.rest;

import edu.uoc.epcsd.course.domain.exception.CourseNotFoundException;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.exception.DomainException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;

@ControllerAdvice
public class RestExceptionHandler {

	@ExceptionHandler(CourseNotFoundException.class)
	public void handleCourseNotFound(CourseNotFoundException ex) {
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, ex.getMessage(), ex);
	}

	@ExceptionHandler(UserNotFoundException.class)
	public void handleUserNotFound(UserNotFoundException ex) {
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, ex.getMessage(), ex);
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public void handleBadRequest(IllegalArgumentException ex) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex);
	}

	@ExceptionHandler(DomainException.class)
	public void handleDomain(DomainException ex) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex);
	}

}
