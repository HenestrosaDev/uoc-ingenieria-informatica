package edu.uoc.epcsd.user.domain.service;

import edu.uoc.epcsd.user.domain.exception.ProductNotFoundException;
import edu.uoc.epcsd.user.domain.repository.ProductRepository;
import edu.uoc.epcsd.user.domain.Alert;
import edu.uoc.epcsd.user.domain.repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@Service
public class AlertServiceImpl implements AlertService {

	private final AlertRepository alertRepository;

	private final ProductRepository productRepository;


	public List<Alert> findAllAlerts() {
		return alertRepository.findAllAlerts();
	}

	public Optional<Alert> findAlertById(Long id) {
		return alertRepository.findAlertById(id);
	}

	@Override
	public List<Alert> findAlertsByProductAndDate(Long productId, LocalDate availableOnDate) {
		return alertRepository.findAlertsByProductAndDate(productId, availableOnDate);
	}

	@Override
	public List<Alert> findAlertsByUserAndInterval(Long userId, LocalDate fromDate, LocalDate toDate) {
		return alertRepository.findAlertsByUserAndInterval(userId, fromDate, toDate);
	}

	public Long createAlert(Alert alert) throws ProductNotFoundException {
		if (!productRepository.existsById(alert.getProductId())) {
			throw new ProductNotFoundException(alert.getProductId());
		}
		return alertRepository.createAlert(alert);
	}
}
