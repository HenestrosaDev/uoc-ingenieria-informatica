package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;


import edu.uoc.epcsd.productcatalog.domain.Category;
import edu.uoc.epcsd.productcatalog.domain.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers.contains;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryRepositoryImpl implements CategoryRepository {

	private final SpringDataCategoryRepository jpaRepository;

	@Override
	public List<Category> findAllCategories() {
		return jpaRepository.findAll().stream().map(CategoryEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Optional<Category> findCategoryById(Long id) {
		return jpaRepository.findById(id).map(CategoryEntity::toDomain);
	}

	public List<Category> findCategoriesByExample(Category category) {

		ExampleMatcher matcher = ExampleMatcher.matching()
				.withMatcher("name", contains().ignoreCase())
				.withMatcher("description", contains().ignoreCase());


		CategoryEntity categoryEntity = CategoryEntity.fromDomain(category);
		if (category.getParentId() != null) {
			categoryEntity.setParent(jpaRepository.findById((category.getParentId())).orElseThrow(() -> new edu.uoc.epcsd.productcatalog.domain.service.CategoryNotFoundException(category.getParentId())));
		}

		Example<CategoryEntity> example = Example.of(categoryEntity, matcher);

		return jpaRepository.findAll(example).stream().map(CategoryEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Long createCategory(Category category) {

		CategoryEntity parentCategory = null;
		if (category.getParentId() != null) {
			parentCategory = jpaRepository.findById(category.getParentId()).orElseThrow(() -> new edu.uoc.epcsd.productcatalog.domain.service.CategoryNotFoundException(category.getParentId()));
		}

		CategoryEntity categoryEntity = CategoryEntity.fromDomain(category);
		categoryEntity.setParent(parentCategory);

		return jpaRepository.save(categoryEntity).getId();
	}
}
