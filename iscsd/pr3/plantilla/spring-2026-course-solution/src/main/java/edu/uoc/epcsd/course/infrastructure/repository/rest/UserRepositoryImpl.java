package edu.uoc.epcsd.course.infrastructure.repository.rest;

import edu.uoc.epcsd.course.domain.UserType;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserRepositoryImpl implements UserRepository {

    private final RestTemplate restTemplate;

    @Value("${userService.getUserByEmail.url}")
    private String userServiceUrl;

	@Override
	public boolean findUserByEmail(String email) {
		try {
			ResponseEntity<GetUserResponse> response = restTemplate.
                getForEntity(userServiceUrl, GetUserResponse.class, email);
        
			if (response.getStatusCode() == HttpStatus.OK) {
				// We assume that a successful response is only returned when the
				// user can be retrieved successfully, and it indeed exists.
				return true;
			}

			if (response.getStatusCode().equals(HttpStatus.NOT_FOUND)) {
				return false;
			}

			throw new RuntimeException("Could not fetch user with email " + email);
		} catch (RestClientException e) {		       
		      throw new IllegalArgumentException("User/Instructor "+email+" does not exist !");
		}
    }

	@Override
	public boolean findInstructorByEmail(String email) {
		try {
			ResponseEntity<GetUserResponse> response = restTemplate.
                getForEntity(userServiceUrl, GetUserResponse.class, email);

			;

			if (response.getBody().getType()==UserType.INSTRUCTOR) {
				// We assume that a successful response is only returned when the
				// user is instructor, and it indeed exists.
				return true;
			}

			if (response.getStatusCode().equals(HttpStatus.NOT_FOUND)) {
				return false;
			}

			throw new RuntimeException("Could not fetch instructor with email " + email);
		} catch (RestClientException e) {		       
		      throw new IllegalArgumentException("The user "+email+" is not instructor !");
		}
    }
}
