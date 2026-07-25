package edu.uoc.epcsd.user.domain.service;

import edu.uoc.epcsd.user.domain.User;
import edu.uoc.epcsd.user.domain.repository.AlertRepository;
import edu.uoc.epcsd.user.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	private final AlertRepository alertRepository;

	public List<User> findAllUsers() {
		return userRepository.findAllUsers();
	}

	public Optional<User> findUserById(Long id) {
		return userRepository.findUserById(id);
	}

	public Optional<User> findUserByEmail(String email) {
		return userRepository.findUserByEmail(email);
	}

	public Long createUser(User user) {
		return userRepository.createUser(user);
	}

	public Set<User> getUsersToAlert(Long productId, LocalDate availableOnDate) {
		return alertRepository.findAlertsByProductAndDate(productId, availableOnDate).stream().collect(Collectors.toList())
				.stream().map(alert -> userRepository.findUserById(alert.getUserId()).get()).collect(Collectors.toSet());
	}
}
