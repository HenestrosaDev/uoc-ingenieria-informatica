package edu.uoc.epcsd.course.domain.exception;

public class EnrollmentNotFoundException extends DomainException {
	private static final long serialVersionUID = 1L;

	public EnrollmentNotFoundException(Long id) {
		super("Enrollment with id '" + id + "' not found");
	}
}
