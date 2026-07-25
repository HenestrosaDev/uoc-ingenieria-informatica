package edu.uoc.epcsd.user.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SpringDataUserRepository extends JpaRepository<UserEntity, Long> {
	public Optional<UserEntity> findUserEntityByEmail(String email);
	public Optional<UserEntity> findUserById(Long id);
}
