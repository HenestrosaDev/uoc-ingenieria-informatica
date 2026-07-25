package edu.uoc.epcsd.course.application.rest.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class EnrollmentRequest {

	@NotBlank
	private String student;

}
