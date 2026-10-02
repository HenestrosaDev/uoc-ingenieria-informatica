package edu.uoc.epcsd.user.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SpringDataAlertRepository extends JpaRepository<AlertEntity, Long> {

	List<AlertEntity> findAllByProductIdAndFromLessThanEqualAndToGreaterThanEqual(Long productId, LocalDate from, LocalDate to);

	@Query("select a from Alert a where a.user.id = ?1 and ((a.from <= ?2 and a.to >= ?2) or (a.from <= ?3 and a.to >= ?3))")
	List<AlertEntity> findAlertsByUserAndInterval(Long productId, LocalDate from, LocalDate to);
}
