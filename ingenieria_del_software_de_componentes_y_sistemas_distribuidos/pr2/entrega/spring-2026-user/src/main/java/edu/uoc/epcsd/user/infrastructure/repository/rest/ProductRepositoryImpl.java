package edu.uoc.epcsd.user.infrastructure.repository.rest;

import edu.uoc.epcsd.user.domain.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ProductRepositoryImpl implements ProductRepository {

	private final RestTemplate restTemplate;

	@Value("${productService.getProductDetails.url}")
	private String productServiceUrl;

	@Override
	public boolean existsById(Long id) {
		ResponseEntity<GetProductResponse> response = restTemplate.
				getForEntity(productServiceUrl, GetProductResponse.class, id);
		if (response.getStatusCode() == HttpStatus.OK) {
			// We assume that a successful response is only returned when the
			// product can be retrieved successfully, and it indeed exists.
			return true;
		}

		if (response.getStatusCode().equals(HttpStatus.NOT_FOUND)) {
			return false;
		}

		throw new RuntimeException("Could not fetch product with id " + id);
	}
}
