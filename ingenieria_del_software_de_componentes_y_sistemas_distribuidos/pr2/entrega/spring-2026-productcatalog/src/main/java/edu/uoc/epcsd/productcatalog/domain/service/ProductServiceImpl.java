package edu.uoc.epcsd.productcatalog.domain.service;

import edu.uoc.epcsd.productcatalog.domain.Product;
import edu.uoc.epcsd.productcatalog.domain.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class ProductServiceImpl implements ProductService {

	private final ItemService itemService;

	private final ProductRepository productRepository;

	public List<Product> findAllProducts() {
		return productRepository.findAllProducts();
	}

	public Optional<Product> findProductById(Long id) {
		return productRepository.findProductById(id);
	}

	public List<Product> findProductsByExample(Product product) {
		return productRepository.findProductsByExample(product);
	}

	public Long createProduct(Product product) {
		return productRepository.createProduct(product);
	}

	public void deleteProduct(Long id) {

		Product product = productRepository.findProductById(id).orElseThrow(() -> new edu.uoc.epcsd.productcatalog.domain.service.ProductNotFoundException(id));

		itemService.findByProductId(id).stream().forEach(item -> itemService.deleteItem(item.getSerialNumber()));

		productRepository.deleteProduct(product);
	}
}
