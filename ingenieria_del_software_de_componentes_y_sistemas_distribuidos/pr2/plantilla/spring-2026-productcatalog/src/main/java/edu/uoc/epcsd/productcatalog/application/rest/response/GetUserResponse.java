package edu.uoc.epcsd.productcatalog.application.rest.response;

import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GetUserResponse {

	private Long id;

	private String fullName;

	private String email;

	private String phoneNumber;

}

