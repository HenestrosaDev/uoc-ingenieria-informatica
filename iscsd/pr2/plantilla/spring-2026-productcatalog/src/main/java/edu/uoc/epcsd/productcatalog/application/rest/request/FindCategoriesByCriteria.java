package edu.uoc.epcsd.productcatalog.application.rest.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public final class FindCategoriesByCriteria {

	private final String name;

	private final String description;

	private final Long parentId;

}
