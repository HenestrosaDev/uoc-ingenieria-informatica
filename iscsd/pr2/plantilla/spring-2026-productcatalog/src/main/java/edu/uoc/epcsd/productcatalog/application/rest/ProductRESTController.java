package edu.uoc.epcsd.productcatalog.application.rest;


import edu.uoc.epcsd.productcatalog.application.rest.request.CreateProductRequest;
import edu.uoc.epcsd.productcatalog.application.rest.request.FindProductsByCriteria;
import edu.uoc.epcsd.productcatalog.application.rest.response.GetProductResponse;
import edu.uoc.epcsd.productcatalog.domain.Product;
import edu.uoc.epcsd.productcatalog.domain.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.util.List;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/products")
public class ProductRESTController {

	private final ProductService productService;

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Product> getAllProducts() {
		log.trace("getAllProducts");

		return productService.findAllProducts();
	}

	@GetMapping("/{productId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<GetProductResponse> getProductById(@PathVariable @NotNull Long productId) {
		log.trace("getProductById");

		return productService.findProductById(productId).map(product -> ResponseEntity.ok().body(GetProductResponse.fromDomain(product)))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/search")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Product>> findProductsByCriteria(FindProductsByCriteria findProductsCriteria) {
		log.trace("findProductsByCriteria");

		try {
			return ResponseEntity.ok(productService.findProductsByExample(Product.builder()
					.name(findProductsCriteria.getName())
					.categoryId(findProductsCriteria.getCategoryId())
					.build()));
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified product category " + findProductsCriteria.getCategoryId() + " does not exist.", e);
		}
	}

	@PostMapping
	public ResponseEntity<Long> createProduct(@RequestBody @NotNull @Valid CreateProductRequest createProductRequest) {
		log.trace("createProduct");

		log.trace("Creating product " + createProductRequest);

		try {
			Long productId = productService.createProduct(Product.builder()
					.name(createProductRequest.getName())
					.description(createProductRequest.getDescription())
					.dailyPrice(createProductRequest.getDailyPrice())
					.model(createProductRequest.getModel())
					.brand(createProductRequest.getBrand())
					.categoryId(createProductRequest.getCategoryId())
					.build());

			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(productId)
					.toUri();

			return ResponseEntity.created(uri).body(productId);
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified product category " + createProductRequest.getCategoryId() + " does not exist.", e);
		}
	}

	@DeleteMapping("/{productId}")
	public ResponseEntity<Boolean> removeProduct(@PathVariable @NotNull Long productId) {
		log.trace("removeProduct");

		try {
			productService.deleteProduct(productId);
			return new ResponseEntity<>(true, HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified product id " + productId + " does not exist.", e);
		}
	}
}
