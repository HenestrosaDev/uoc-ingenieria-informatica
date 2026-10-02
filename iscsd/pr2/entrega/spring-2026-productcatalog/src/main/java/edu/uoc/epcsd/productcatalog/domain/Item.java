package edu.uoc.epcsd.productcatalog.domain;

import lombok.*;

import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Item {

	@NotNull
	private String serialNumber;

	@NotNull
	@Builder.Default
	private ItemStatus status = ItemStatus.OPERATIONAL;

	@NotNull
	private Long productId;
}
