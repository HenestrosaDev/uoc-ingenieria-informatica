package edu.uoc.epcsd.course.application.rest.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
public final class CourseRequest {
    
	@NotBlank
    private final String instructor;
    
    @NotBlank
    private final String title;
    
    @NotBlank
    private final String description;

    @NotNull
    private final Date enrollmentStartDate;
    
    @NotNull
    private final Date enrollmentEndDate;

    @NotBlank
    private final String mode;

    @NotNull
    private final Long price;

    @NotBlank
    private final String objectives;

    @NotBlank
    private final String methology;

    @NotNull
    private final Long duration;

    @NotBlank
    private final String language;
    
    @NotBlank
    private final String location;
	
}
