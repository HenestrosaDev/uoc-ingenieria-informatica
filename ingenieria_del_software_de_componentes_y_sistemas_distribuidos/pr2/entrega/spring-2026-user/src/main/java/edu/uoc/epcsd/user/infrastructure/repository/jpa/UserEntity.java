package edu.uoc.epcsd.user.infrastructure.repository.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;

import edu.uoc.epcsd.user.domain.User;
import edu.uoc.epcsd.user.domain.UserType;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity(name = "User")
@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "`user`")
public class UserEntity implements DomainTranslatable<User> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "fullName", nullable = false)
	private String fullName;

	@Column(name = "email", nullable = false)
	private String email;

	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "phoneNumber", nullable = false)
	private String phoneNumber;

	@Column(name = "type", nullable = false)
	@Enumerated(EnumType.STRING)    

	@Builder.Default
	private UserType type = UserType.STUDENT;    

	@JsonIgnore
	@OneToMany(mappedBy = "user", orphanRemoval = true)
	private List<AlertEntity> alerts;

	public static UserEntity fromDomain(User user) {
		if (user == null) {
			return null;
		}

		return UserEntity.builder()
				.id(user.getId())
				.fullName(user.getFullName())
				.email(user.getEmail())
				.password(user.getPassword())
				.phoneNumber(user.getPhoneNumber())
				.type(user.getType())
				.build();
	}

	@Override
	public User toDomain() {
		return User.builder()
				.id(this.getId())
				.fullName(this.getFullName())
				.email(this.getEmail())
				.password(this.getPassword())
				.phoneNumber(this.getPhoneNumber())
				.type(this.getType())
				.build();
	}
}
