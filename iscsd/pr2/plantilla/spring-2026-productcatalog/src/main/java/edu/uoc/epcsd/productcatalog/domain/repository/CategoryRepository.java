package edu.uoc.epcsd.productcatalog.domain.repository;

import edu.uoc.epcsd.productcatalog.domain.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository {

	List<Category> findAllCategories();

	Optional<Category> findCategoryById(Long id);

	List<Category> findCategoriesByExample(Category category);

	Long createCategory(Category category);

}
