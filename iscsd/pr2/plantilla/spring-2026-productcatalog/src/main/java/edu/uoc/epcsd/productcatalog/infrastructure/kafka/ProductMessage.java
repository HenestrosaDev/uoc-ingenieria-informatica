package edu.uoc.epcsd.productcatalog.infrastructure.kafka;

import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
public final class ProductMessage {

	private final Long productId;

}
