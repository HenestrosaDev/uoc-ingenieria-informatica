package edu.uoc.epcsd.microcredential.application.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import edu.uoc.epcsd.microcredential.domain.exception.DomainException;

@ControllerAdvice
public class RestExceptionHandler {

	@ExceptionHandler(DomainException.class)
	public void handleDomain(DomainException ex) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage(), ex);
	}

	@ExceptionHandler(Exception.class)
	public void handleGeneric(Exception ex) {
		throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage(), ex);
	}
}
