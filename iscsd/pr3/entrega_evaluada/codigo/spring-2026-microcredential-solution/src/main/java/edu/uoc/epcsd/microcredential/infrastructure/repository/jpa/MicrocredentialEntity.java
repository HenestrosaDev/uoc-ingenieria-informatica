package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;
import edu.uoc.epcsd.microcredential.infrastructure.repository.jpa.MicrocredentialEntity;
import edu.uoc.epcsd.microcredential.domain.Microcredential;
import lombok.*;

import java.util.Date;

import javax.persistence.*;

@Entity(name = "microcredential")
@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MicrocredentialEntity implements DomainTranslatable<Microcredential> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "submitdate", nullable = true)
    private Date submitDate;
    
    @Column(name = "assignmentdate", nullable = false)
    private Date assignmentDate;
    
    @Column(name = "enrollment", nullable = false)
    private Long enrollment;

    @Column(name = "content", nullable = true)
    private String content;
    
    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private MicrocredentialStatus status = MicrocredentialStatus.REQUESTED;

    
    public static MicrocredentialEntity fromDomain(Microcredential microcredential) {
        if (microcredential == null) {
            return null;
        }

        return MicrocredentialEntity.builder()
                .id(microcredential.getId())              
                .enrollment(microcredential.getEnrollment())                
                .submitDate(microcredential.getSubmitDate())
                .assignmentDate(microcredential.getAssignmentDate())
                .content(microcredential.getContent())
                .status(microcredential.getStatus())
                .build();
    }

    @Override
    public Microcredential toDomain() {
        return Microcredential.builder()
                .id(this.getId())
                .enrollment(this.getEnrollment())
                .submitDate(this.getSubmitDate())
                .assignmentDate(this.getAssignmentDate())
                .content(this.getContent())              
                .status(this.getStatus())
                .build();
    }
}
