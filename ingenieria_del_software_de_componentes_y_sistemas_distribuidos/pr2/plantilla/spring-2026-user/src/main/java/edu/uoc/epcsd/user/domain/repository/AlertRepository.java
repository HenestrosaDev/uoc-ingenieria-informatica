package edu.uoc.epcsd.user.domain.repository;


import edu.uoc.epcsd.user.domain.Alert;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AlertRepository {

	List<Alert> findAllAlerts();

	Optional<Alert> findAlertById(Long id);

	List<Alert> findAlertsByProductAndDate(Long productId, LocalDate availableOnDate);

	List<Alert> findAlertsByUserAndInterval(Long userId, LocalDate fromDate, LocalDate toDate);

	Long createAlert(Alert alert);
}
