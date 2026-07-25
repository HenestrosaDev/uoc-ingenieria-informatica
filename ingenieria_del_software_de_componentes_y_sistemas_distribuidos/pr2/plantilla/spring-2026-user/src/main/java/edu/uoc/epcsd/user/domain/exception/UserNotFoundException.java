package edu.uoc.epcsd.user.domain.exception;

public class UserNotFoundException extends DomainException {
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(Long userId) {
		super("User with id '" + userId + "' not found");
	}
}
