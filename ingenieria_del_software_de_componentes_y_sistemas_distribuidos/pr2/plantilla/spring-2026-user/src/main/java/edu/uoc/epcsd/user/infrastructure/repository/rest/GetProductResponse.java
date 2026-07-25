package edu.uoc.epcsd.user.infrastructure.repository.rest;

import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor(force = true)
@AllArgsConstructor
public final class GetProductResponse {

	private final Long id;

	private final String name;

	private final String description;

	private final Double dailyPrice;

	private final String brand;

	private final String model;

	private final String categoryName;

}
