package edu.uoc.epcsd.microcredential.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO for Enrollment data transferred from Course Service.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EnrollmentDto {
	private Long id;
	private String student;
	private Long courseId;
	private String status;
}
