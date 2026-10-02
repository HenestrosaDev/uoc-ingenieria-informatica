package edu.uoc.epcsd.user.infrastructure.repository.jpa;

import com.fasterxml.jackson.annotation.JsonFormat;
import edu.uoc.epcsd.user.domain.Alert;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "Alert")
@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AlertEntity implements DomainTranslatable<Alert> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "`from`", nullable = false, columnDefinition = "DATE")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate from;

	@Column(name = "`to`", nullable = false, columnDefinition = "DATE")
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate to;

	@Column(name = "productId", nullable = false)
	private Long productId;

	@ManyToOne
	private UserEntity user;

	public static AlertEntity fromDomain(Alert alert) {
		if (alert == null) {
			return null;
		}

		return AlertEntity.builder()
				.id(alert.getId())
				.from(alert.getFrom())
				.to(alert.getTo())
				.productId(alert.getProductId())
				.build();
	}

	@Override
	public Alert toDomain() {
		return Alert.builder()
				.id(this.getId())
				.from(this.getFrom())
				.to(this.getTo())
				.productId(this.getProductId())
				.userId(this.getUser().getId())
				.build();
	}
}
