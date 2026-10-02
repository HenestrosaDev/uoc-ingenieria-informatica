package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

import edu.uoc.epcsd.productcatalog.domain.Product;
import edu.uoc.epcsd.productcatalog.domain.repository.ProductRepository;
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
public class ProductRepositoryImpl implements ProductRepository {

	private final SpringDataProductRepository jpaRepository;

	private final SpringDataCategoryRepository jpaCategoryRepository;

	@Override
	public List<Product> findAllProducts() {
		return jpaRepository.findAll().stream().map(ProductEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Optional<Product> findProductById(Long id) {
		return jpaRepository.findById(id).map(ProductEntity::toDomain);
	}

	@Override
	public List<Product> findProductsByExample(Product product) {

		ExampleMatcher matcher = ExampleMatcher.matching()
				.withMatcher("name", contains().ignoreCase());


		ProductEntity productEntity = ProductEntity.fromDomain(product);
		if (product.getCategoryId() != null) {
			productEntity.setCategory(jpaCategoryRepository.findById((product.getCategoryId())).orElseThrow(() -> new edu.uoc.epcsd.productcatalog.domain.service.CategoryNotFoundException(product.getCategoryId())));
		}

		Example<ProductEntity> example = Example.of(productEntity, matcher);

		return jpaRepository.findAll(example).stream().map(ProductEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Long createProduct(Product product) {
		ProductEntity productEntity = ProductEntity.fromDomain(product);
		productEntity.setCategory(jpaCategoryRepository.getById(product.getCategoryId()));

		return jpaRepository.save(productEntity).getId();
	}

	@Override
	public void deleteProduct(Product product) {
		jpaRepository.delete(ProductEntity.fromDomain(product));
	}
}
