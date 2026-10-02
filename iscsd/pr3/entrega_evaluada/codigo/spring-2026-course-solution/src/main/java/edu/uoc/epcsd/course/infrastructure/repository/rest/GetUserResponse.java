package edu.uoc.epcsd.course.infrastructure.repository.rest;

import edu.uoc.epcsd.course.domain.UserType;
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
    
    private UserType type;

}
