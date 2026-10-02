package edu.uoc.epcsd.user.domain.service;

import edu.uoc.epcsd.user.domain.User;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService {

	List<User> findAllUsers();

	Optional<User> findUserById(Long id);

	Optional<User> findUserByEmail(String email);

	Set<User> getUsersToAlert(Long productId, LocalDate availableOnDate);

	Long createUser(User user);
}
