package edu.uoc.epcsd.user.domain.service;

import edu.uoc.epcsd.user.domain.Alert;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AlertService {

	List<Alert> findAllAlerts();

	Optional<Alert> findAlertById(Long id);

	List<Alert> findAlertsByProductAndDate(Long productId, LocalDate date);

	List<Alert> findAlertsByUserAndInterval(Long userId, LocalDate fromDate, LocalDate toDate);

	Long createAlert(Alert alert);
}
