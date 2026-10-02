package edu.uoc.epcsd.microcredential.application.rest.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
public final class MicrocredentialRequest {
    
	@NotNull
    private final Date submitDate;
    
    @NotNull
    private final Date assignmentDate;
    
    @NotBlank
    private final String content;
	
}
