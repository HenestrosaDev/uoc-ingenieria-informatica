package edu.uoc.epcsd.productcatalog.application.rest;

import edu.uoc.epcsd.productcatalog.application.rest.request.CreateCategoryRequest;
import edu.uoc.epcsd.productcatalog.application.rest.request.FindCategoriesByCriteria;
import edu.uoc.epcsd.productcatalog.domain.Category;
import edu.uoc.epcsd.productcatalog.domain.service.CategoryService;
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
@RequestMapping("/categories")
public class CategoryRESTController {

	private final CategoryService categoryService;

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Category> getAllCategories() {
		log.trace("getAllCategories");

		return categoryService.findAllCategories();
	}

	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Category> findCategoryById(@PathVariable @NotNull Long id) {
		log.info("findCategoryById");

		return categoryService.findCategoryById(id).map(category -> ResponseEntity.ok().body(category))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/search")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<List<Category>> findCategoriesByCriteria(@NotNull FindCategoriesByCriteria findCategoriesCriteria) {
		log.trace("findCategoriesByCriteria");

		try {
			return ResponseEntity.ok(categoryService.findCategoriesByExample(Category.builder()
					.name(findCategoriesCriteria.getName())
					.description(findCategoriesCriteria.getDescription())
					.parentId(findCategoriesCriteria.getParentId())
					.build()));
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified parent category " + findCategoriesCriteria.getParentId() + " does not exist.", e);
		}
	}

	@PostMapping
	public ResponseEntity<Long> createCategory(@RequestBody @NotNull @Valid CreateCategoryRequest createCategoryRequest) {
		log.trace("createCategory");

		log.trace("Creating category " + createCategoryRequest);

		try {
			Long categoryId = categoryService.createCategory(Category.builder()
					.parentId(createCategoryRequest.getParentCategoryId())
					.name(createCategoryRequest.getName())
					.description(createCategoryRequest.getDescription()).build());
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(categoryId)
					.toUri();
			return ResponseEntity.created(uri).body(categoryId);

		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified parent category " + createCategoryRequest.getParentCategoryId() + " does not exist.", e);
		}
	}
}
