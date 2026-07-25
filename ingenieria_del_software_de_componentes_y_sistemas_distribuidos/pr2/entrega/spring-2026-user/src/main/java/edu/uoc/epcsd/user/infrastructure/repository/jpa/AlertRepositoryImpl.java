package edu.uoc.epcsd.user.infrastructure.repository.jpa;


import edu.uoc.epcsd.user.domain.Alert;
import edu.uoc.epcsd.user.domain.repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import edu.uoc.epcsd.user.domain.exception.UserNotFoundException;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class AlertRepositoryImpl implements AlertRepository {

	private final SpringDataAlertRepository jpaRepository;

	private final SpringDataUserRepository jpaUserRepository;

	@Override
	public List<Alert> findAllAlerts() {
		return jpaRepository.findAll().stream().map(AlertEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Optional<Alert> findAlertById(Long id) {
		return jpaRepository.findById(id).map(AlertEntity::toDomain);
	}

	@Override
	public List<Alert> findAlertsByProductAndDate(Long productId, LocalDate availableOnDate) {
		return jpaRepository.findAllByProductIdAndFromLessThanEqualAndToGreaterThanEqual(productId, availableOnDate, availableOnDate).stream().map(AlertEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public List<Alert> findAlertsByUserAndInterval(Long userId, LocalDate fromDate, LocalDate toDate) {
		return jpaRepository.findAlertsByUserAndInterval(userId, fromDate, toDate).stream().map(AlertEntity::toDomain).collect(Collectors.toList());
	}

	@Override
	public Long createAlert(Alert alert) {

		UserEntity userEntity = jpaUserRepository.findById(alert.getUserId()).orElseThrow(() -> new UserNotFoundException(alert.getUserId()));

		AlertEntity alertEntity = AlertEntity.fromDomain(alert);
		alertEntity.setUser(userEntity);

		return jpaRepository.save(alertEntity).getId();
	}
}
