package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataItemRepository extends JpaRepository<ItemEntity, String> {

	public Optional<ItemEntity> findItemEntityBySerialNumber(String serialNumber);

	public List<ItemEntity> findItemEntitiesByProduct(ProductEntity productEntity);

}
