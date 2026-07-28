package edu.uoc.epcsd.microcredential.infrastructure.kafka;
import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
public class MicrocredentialMessage {

    private Long microcredentialId;
    private String userEmail;
    private Long courseId;
    private Long enrollment;

}