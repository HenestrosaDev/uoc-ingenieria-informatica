package edu.uoc.epcsd.user.application.rest;

import edu.uoc.epcsd.user.application.rest.request.CreateUserRequest;
import edu.uoc.epcsd.user.application.rest.response.GetUserResponse;
import edu.uoc.epcsd.user.domain.User;
import edu.uoc.epcsd.user.domain.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.time.LocalDate;
import java.util.List;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/users")
public class UserRESTController {

	private final UserService userService;

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<User> getAllUsers() {
		log.trace("getAllUsers");

		return userService.findAllUsers();
	}

	@GetMapping("/{userId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<GetUserResponse> getUserById(@PathVariable @NotNull Long userId) {
		log.trace("getUserById");

		return userService.findUserById(userId).map(user -> ResponseEntity.ok().body(GetUserResponse.fromDomain(user)))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/byEmail/{email}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<GetUserResponse> getUserByEmail(@PathVariable @NotNull String email) {
		log.trace("getUserByEmail");

		return userService.findUserByEmail(email).map(user -> ResponseEntity.ok().body(GetUserResponse.fromDomain(user)))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/toAlert")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<GetUserResponse[]> getUsersToAlert(@RequestParam @NotNull Long productId, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate availableOnDate) {
		log.trace("getUsersToAlert");

		return ResponseEntity.ok().body(userService.getUsersToAlert(productId, availableOnDate).stream().map(user -> GetUserResponse.fromDomain(user)).toArray(GetUserResponse[]::new));
	}

	@PostMapping
	public ResponseEntity<Long> createUser(@RequestBody @Valid CreateUserRequest createUserRequest) {
		log.trace("createUser");
		log.trace("Creating user " + createUserRequest);
		Long userId = userService.createUser(User.builder()
				.email(createUserRequest.getEmail())
				.fullName(createUserRequest.getFullName())
				.phoneNumber(createUserRequest.getPhoneNumber())
				.type(createUserRequest.getType())
				.password(createUserRequest.getPassword()).build());

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(userId)
				.toUri();

		return ResponseEntity.created(uri).body(userId);
	}
}

