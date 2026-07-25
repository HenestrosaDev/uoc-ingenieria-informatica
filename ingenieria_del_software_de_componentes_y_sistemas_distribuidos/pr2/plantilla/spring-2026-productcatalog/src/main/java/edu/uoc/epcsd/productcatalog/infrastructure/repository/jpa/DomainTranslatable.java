package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

public interface DomainTranslatable<T> {

	T toDomain();

}
