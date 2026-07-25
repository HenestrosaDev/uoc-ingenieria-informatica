package edu.uoc.epcsd.productcatalog.application.rest.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
public final class CreateProductRequest {

	@NotBlank
	private String name;

	@NotBlank
	private String description;

	@NotNull @Min(0)
	private Double dailyPrice;

	@NotBlank
	private String brand;

	@NotBlank
	private String model;

	@NotNull
	private Long categoryId;

}
