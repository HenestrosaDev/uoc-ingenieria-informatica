package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;

@ToString
@Getter
@Setter
@SuperBuilder
@EqualsAndHashCode
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@MappedSuperclass
public abstract class CatalogElement {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "description", nullable = false)
	private String description;

}
