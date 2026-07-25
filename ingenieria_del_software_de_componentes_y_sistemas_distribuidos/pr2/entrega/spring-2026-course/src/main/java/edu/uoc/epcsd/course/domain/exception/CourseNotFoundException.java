package edu.uoc.epcsd.course.domain.exception;

public class CourseNotFoundException extends DomainException {
	private static final long serialVersionUID = 1L;

	public CourseNotFoundException(Long courseId) {
		super("Course with id '" + courseId + "' not found");
	}
}
