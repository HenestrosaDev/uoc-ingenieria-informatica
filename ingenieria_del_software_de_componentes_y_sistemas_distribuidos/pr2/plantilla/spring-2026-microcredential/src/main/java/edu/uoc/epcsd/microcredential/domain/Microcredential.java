package edu.uoc.epcsd.microcredential.domain;

import lombok.*;
import lombok.experimental.SuperBuilder;
import java.util.List;
import java.util.Date;
import javax.validation.constraints.NotNull;
import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class Microcredential{

	@NotNull
	private Long id;

	@NotNull
	private Date submitDate;

	@NotNull
	private Date assignmentDate;

	@NotNull
	@Builder.Default
	private MicrocredentialStatus status = MicrocredentialStatus.REQUESTED;

	@NotNull
	private String content;

	@NotNull
	private Long enrollment;

}
