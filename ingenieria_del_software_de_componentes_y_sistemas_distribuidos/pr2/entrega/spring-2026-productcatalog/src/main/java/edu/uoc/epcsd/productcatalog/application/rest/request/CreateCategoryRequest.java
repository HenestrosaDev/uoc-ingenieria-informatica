package edu.uoc.epcsd.productcatalog.application.rest.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public final class CreateCategoryRequest {

	private final Long parentCategoryId;

	@NotBlank
	private final String name;

	private final String description;

}