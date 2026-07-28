package edu.uoc.epcsd.notification.application.kafka;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MicrocredentialMessage {

    private Long microcredentialId;
    private String userEmail;
    private Long courseId;
    private Long enrollment;

}