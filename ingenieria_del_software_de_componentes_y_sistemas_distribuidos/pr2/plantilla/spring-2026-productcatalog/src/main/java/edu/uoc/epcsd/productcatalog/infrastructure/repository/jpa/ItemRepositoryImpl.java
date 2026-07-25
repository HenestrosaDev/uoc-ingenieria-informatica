package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

import edu.uoc.epcsd.productcatalog.domain.Item;
import edu.uoc.epcsd.productcatalog.domain.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class ItemRepositoryImpl implements ItemRepository {

	private final SpringDataItemRepository jpaRepository;

	private final SpringDataProductRepository jpaProductRepository;

	@Override
	public List<Item> findAllItems() {
		return jpaRepository.findAll().stream().map(ItemEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Optional<Item> findBySerialNumber(String serialNumber) {

		return jpaRepository.findItemEntityBySerialNumber(serialNumber).map(ItemEntity::toDomain);
	}

	@Override
	public List<Item> findByProductId(Long productId) {

		return jpaRepository.findItemEntitiesByProduct(jpaProductRepository.getById(productId)).stream().map(ItemEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public String createItem(Item item) {

		ItemEntity itemEntity = ItemEntity.fromDomain(item);
		itemEntity.setProduct(jpaProductRepository.findById(item.getProductId()).orElseThrow(IllegalArgumentException::new));

		return jpaRepository.save(itemEntity).getSerialNumber();
	}

	@Override
	public Item save(Item item) {
		ItemEntity itemEntity = ItemEntity.fromDomain(item);
		itemEntity.setProduct(jpaProductRepository.findById(item.getProductId()).get());
		return jpaRepository.save(itemEntity).toDomain();
	}

	@Override
	public void deleteItem(String serialNumber) {
		jpaRepository.deleteById(serialNumber);
	}
}
