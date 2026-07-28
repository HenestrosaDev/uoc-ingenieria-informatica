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
public class Microcredential {

    @NotNull
    private Long microcredentialid;

    @NotNull
    private Date submitDate;

    @NotNull
    private Date assignmentDte;

    @NotNull
    private String content;

    @NotNull
    private String status;

}
