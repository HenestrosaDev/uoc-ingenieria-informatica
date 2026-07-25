package edu.uoc.epcsd.microcredential.application.rest.request;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class ApproveRejectRequest {

	@NotBlank
	private String userEmail;

	@NotNull
	private Long courseId;

}
