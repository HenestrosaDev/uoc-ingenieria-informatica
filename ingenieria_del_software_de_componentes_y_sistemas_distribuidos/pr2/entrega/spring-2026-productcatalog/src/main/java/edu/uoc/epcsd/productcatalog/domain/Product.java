package edu.uoc.epcsd.productcatalog.domain;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Product extends CatalogElement {

	@NotNull
	private Double dailyPrice;

	@NotNull
	private String brand;

	@NotNull
	private String model;

	@NotNull
	private Long categoryId;

}
