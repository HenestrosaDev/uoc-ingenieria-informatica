package edu.uoc.epcsd.productcatalog.domain.repository;

import edu.uoc.epcsd.productcatalog.domain.Item;

import java.util.List;
import java.util.Optional;

public interface ItemRepository {

	List<Item> findAllItems();

	Optional<Item> findBySerialNumber(String serialNumber);

	List<Item> findByProductId(Long productId);

	String createItem(Item item);

	Item save(Item item);

	void deleteItem(String serialNumber);

}
