package edu.uoc.epcsd.productcatalog.domain.service;

public class ItemNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public ItemNotFoundException(String serial) {
		super("Item with serial '" + serial + "' not found");
	}
}
