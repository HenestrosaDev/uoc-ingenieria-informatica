package edu.uoc.epcsd.productcatalog.domain.service;


import edu.uoc.epcsd.productcatalog.domain.Category;
import edu.uoc.epcsd.productcatalog.domain.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class CategoryServiceImpl implements CategoryService {

	private final CategoryRepository categoryRepository;

	@Override
	public List<Category> findAllCategories() {
		return categoryRepository.findAllCategories();
	}

	@Override
	public Optional<Category> findCategoryById(Long id) {
		return categoryRepository.findCategoryById(id);
	}

	@Override
	public List<Category> findCategoriesByExample(Category category) {
		return categoryRepository.findCategoriesByExample(category);
	}

	@Override
	public Long createCategory(Category category) {
		return categoryRepository.createCategory(category);
	}
}
