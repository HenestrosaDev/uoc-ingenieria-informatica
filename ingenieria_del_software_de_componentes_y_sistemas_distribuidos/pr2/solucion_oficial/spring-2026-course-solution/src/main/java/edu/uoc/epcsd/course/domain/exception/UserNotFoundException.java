package edu.uoc.epcsd.course.domain.exception;

public class UserNotFoundException extends DomainException {
    private static final long serialVersionUID = 1L;

	public UserNotFoundException(String email) {
        super("User with id '" + email + "' not found");
    }
}
