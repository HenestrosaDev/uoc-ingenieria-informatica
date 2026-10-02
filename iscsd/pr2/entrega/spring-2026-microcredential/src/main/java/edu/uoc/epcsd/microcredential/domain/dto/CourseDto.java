package edu.uoc.epcsd.microcredential.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for Course data transferred from Course Service.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseDto {
	private Long id;
	private String status;
	private String title;
	private String description;
}
