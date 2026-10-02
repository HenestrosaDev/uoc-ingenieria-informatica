package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

public interface DomainTranslatable<T> {

    T toDomain();

}
