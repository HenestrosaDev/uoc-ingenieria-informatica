package edu.uoc.epcsd.user.infrastructure.repository.jpa;


import edu.uoc.epcsd.user.domain.User;
import edu.uoc.epcsd.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserRepositoryImpl implements UserRepository {

	private final SpringDataUserRepository jpaRepository;

	@Override
	public List<User> findAllUsers() {
		return jpaRepository.findAll().stream().map(UserEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Optional<User> findUserById(Long id) {
		return jpaRepository.findById(id).map(UserEntity::toDomain);
	}

	public Optional<User> findUserByEmail(String email) {
		return jpaRepository.findUserEntityByEmail(email).map(UserEntity::toDomain);
	}

	@Override
	public Long createUser(User user) {
		return jpaRepository.save(UserEntity.fromDomain(user)).getId();
	}

}
