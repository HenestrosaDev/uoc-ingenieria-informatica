package edu.uoc.epcsd.productcatalog.domain.service;

public class CategoryNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public CategoryNotFoundException(Long id) {
		super("Category with id '" + id + "' not found");
	}
}
