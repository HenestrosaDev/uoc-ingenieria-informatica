package edu.uoc.epcsd.notification.application.rest.dtos;

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
