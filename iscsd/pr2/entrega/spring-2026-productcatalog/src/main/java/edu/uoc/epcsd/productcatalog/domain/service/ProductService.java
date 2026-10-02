package edu.uoc.epcsd.productcatalog.domain.service;

import edu.uoc.epcsd.productcatalog.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

	List<Product> findAllProducts();

	Optional<Product> findProductById(Long id);

	List<Product> findProductsByExample(Product build);

	Long createProduct(Product product);

	void deleteProduct(Long id);

}
