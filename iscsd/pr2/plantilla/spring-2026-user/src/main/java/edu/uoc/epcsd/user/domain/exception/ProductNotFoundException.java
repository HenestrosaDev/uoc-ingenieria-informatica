package edu.uoc.epcsd.user.domain.exception;

public class ProductNotFoundException extends DomainException {
	private static final long serialVersionUID = 1L;

	public ProductNotFoundException(Long productId) {
		super("Product with id '" + productId + "' not found");
	}
}