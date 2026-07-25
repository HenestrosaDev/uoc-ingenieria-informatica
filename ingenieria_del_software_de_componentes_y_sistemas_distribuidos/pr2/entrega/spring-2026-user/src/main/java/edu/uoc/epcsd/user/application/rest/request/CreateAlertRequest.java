package edu.uoc.epcsd.user.application.rest.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@AllArgsConstructor
public final class CreateAlertRequest {

	@NotNull
	private final Long productId;

	@NotNull
	private final Long userId;

	@NotNull
	@JsonFormat(pattern = "dd-MM-yyyy")
	private final LocalDate from;

	@NotNull
	@JsonFormat(pattern = "dd-MM-yyyy")
	private final LocalDate to;
}
