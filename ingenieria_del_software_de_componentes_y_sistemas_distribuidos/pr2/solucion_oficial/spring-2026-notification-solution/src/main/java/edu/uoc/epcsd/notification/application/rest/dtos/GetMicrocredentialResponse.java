package edu.uoc.epcsd.notification.application.rest.dtos;


import java.util.Date;
import java.util.List;

import edu.uoc.epcsd.notification.domain.MicrocredentialStatus;
import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public final class GetMicrocredentialResponse {

    private Long id;

    private Date submitDate;

    private Date assignmentDate;

    private MicrocredentialStatus status;

    private String content;

    private Long enrollment;

}
