package edu.uoc.epcsd.productcatalog.domain.service;

import edu.uoc.epcsd.productcatalog.domain.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {

	List<Item> findAllItems();

	Optional<Item> findBySerialNumber(String serialNumber);

	List<Item> findByProductId(Long productId);

	String createItem(Long productId, String serialNumber);

	Item setOperational(String serialNumber, boolean operational);

	void deleteItem(String serialNumber);
}
