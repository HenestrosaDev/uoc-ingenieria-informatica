package edu.uoc.epcsd.course.infrastructure.repository.jpa;

public interface DomainTranslatable<T> {

    T toDomain();

}
