package edu.uoc.epcsd.user.domain.repository;


import edu.uoc.epcsd.user.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
	List<User> findAllUsers();

	Optional<User> findUserById(Long id);

	Optional<User> findUserByEmail(String email);

	Long createUser(User user);
}
