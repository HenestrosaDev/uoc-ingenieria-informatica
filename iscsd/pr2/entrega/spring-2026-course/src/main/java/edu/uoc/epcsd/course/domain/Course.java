package edu.uoc.epcsd.course.domain;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Course{

	@NotNull
	private Long id;

	@NotNull
	private String instructor;

	@NotNull
	private List<Enrollment> enrollment;

	@NotNull
	private String title;

	@NotNull
	private String description;

	@NotNull
	private Date enrollmentStartDate;

	@NotNull
	private Date enrollmentEndDate;

	@NotNull
	private String mode;

	@NotNull
	private Long price;

	@NotNull
	private String objectives;

	@NotNull
	private String methology;

	@NotNull
	private Long duration;

	@NotNull
	private String language;

	@NotNull
	private String location;

	@NotNull
	@Builder.Default
	private CourseStatus status = CourseStatus.DRAFT;

}
