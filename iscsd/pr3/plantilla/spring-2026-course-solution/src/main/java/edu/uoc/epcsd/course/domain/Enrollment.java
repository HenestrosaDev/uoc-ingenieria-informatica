package edu.uoc.epcsd.course.domain;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.Date;
import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Enrollment{

    @NotNull
    private Long id;

    @NotNull
    private String student;    
    
    @NotNull
    private Date enrollmentDate;
    
    @NotNull
    private Long qualification;
    
    @NotNull
    @Builder.Default
    private EnrollmentStatus status = EnrollmentStatus.ACTIVE;

    @NotNull
    private Long courseId;
    
}
