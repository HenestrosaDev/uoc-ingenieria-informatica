package edu.uoc.epcsd.user.application.rest.response;

import edu.uoc.epcsd.user.domain.UserType;
import edu.uoc.epcsd.user.domain.User;
import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
public final class GetUserResponse {

	private final Long id;

	private final String fullName;

	private final String email;

	private final String phoneNumber;

	private final UserType type;

	public static GetUserResponse fromDomain(User user) {
		return GetUserResponse.builder()
				.id(user.getId())
				.fullName(user.getFullName())
				.email(user.getEmail())
				.phoneNumber(user.getPhoneNumber())
				.type(user.getType())
				.build();
	}
}
