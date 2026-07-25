package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

public enum ItemStatus {

	OPERATIONAL,
	NON_OPERATIONAL;

	// translate by ordinal position
	static ItemStatus fromDomain(edu.uoc.epcsd.productcatalog.domain.ItemStatus status) {
		return ItemStatus.values()[status.ordinal()];
	}

	// translate by ordinal position
	static edu.uoc.epcsd.productcatalog.domain.ItemStatus toDomain(ItemStatus status) {
		return edu.uoc.epcsd.productcatalog.domain.ItemStatus.values()[status.ordinal()];
	}
}
