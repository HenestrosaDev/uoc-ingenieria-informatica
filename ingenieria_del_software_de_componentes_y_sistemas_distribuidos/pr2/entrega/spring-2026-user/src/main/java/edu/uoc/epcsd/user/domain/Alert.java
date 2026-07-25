package edu.uoc.epcsd.user.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Alert {

	@NotNull
	private Long id;

	@NotNull
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate from;

	@NotNull
	@JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate to;

	@NotNull
	private Long productId;

	@NotNull
	private Long userId;

}
