package edu.uoc.epcsd.productcatalog.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpringDataProductRepository extends JpaRepository<ProductEntity, Long> {

//    public List<ProductEntity> findCategoryEntityByNameContaining(String name);

//    public List<ProductEntity> findCategoryEntityByDescriptionContaining(String description);

}
