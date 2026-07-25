package edu.uoc.epcsd.course.infrastructure.repository.jpa;

import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.EnrollmentStatus;

import lombok.*;

import java.util.Date;
import javax.persistence.*;

@Entity(name = "enrollment")
@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EnrollmentEntity implements DomainTranslatable<Enrollment> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "student", nullable = false)
	private String student;

	@Column(name = "enrollmentdate", nullable = false)
	private Date enrollmentDate;

	@Column(name = "qualification", nullable = false)
	private Long qualification;

	@ManyToOne
	@JoinColumn(name = "course_id", nullable = false)
	private CourseEntity course;

	@Column(name = "status", nullable = false)
	@Enumerated(EnumType.STRING)
	@Builder.Default
	private EnrollmentStatus status = EnrollmentStatus.ACTIVE;

	public static EnrollmentEntity fromDomain(Enrollment enrollment) {
		if (enrollment == null) {
			return null;
		}

		return EnrollmentEntity.builder()
				.id(enrollment.getId())
				.student(enrollment.getStudent())
				.enrollmentDate(enrollment.getEnrollmentDate())
				.qualification(enrollment.getQualification())
				.course(CourseEntity.builder().id(enrollment.getCourseId()).build())
				.status(enrollment.getStatus())
				.build();
	}

	@Override
	public Enrollment toDomain() {
		return Enrollment.builder()
				.id(this.getId())
				.student(this.getStudent())
				.enrollmentDate(this.getEnrollmentDate())
				.qualification(this.getQualification())
				.status(this.getStatus())
				.courseId(this.getCourse() != null ? this.getCourse().getId() : null)
				.build();
	}
}
