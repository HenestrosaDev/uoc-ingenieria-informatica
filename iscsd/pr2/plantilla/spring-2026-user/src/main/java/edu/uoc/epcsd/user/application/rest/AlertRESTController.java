package edu.uoc.epcsd.user.application.rest;

import edu.uoc.epcsd.user.application.rest.request.CreateAlertRequest;
import edu.uoc.epcsd.user.domain.Alert;
import edu.uoc.epcsd.user.domain.service.AlertService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClientException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.time.LocalDate;
import java.util.List;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/alerts")
public class AlertRESTController {

	private final AlertService alertService;

	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public List<Alert> getAllAlerts() {
		log.trace("getAllAlerts");

		return alertService.findAllAlerts();
	}

	@GetMapping("/{alertId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Alert> getAlertById(@PathVariable @NotNull Long alertId) {
		log.trace("getAlertById");

		return alertService.findAlertById(alertId).map(alert -> ResponseEntity.ok().body(alert))
				.orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/byProductAndDate")
	@ResponseStatus(HttpStatus.OK)
	public List<Alert> getAlertsByProductAndDate(@RequestParam @NotNull Long productId, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate availableOnDate) {
		log.trace("getAlertsByProductAndDate");

		return alertService.findAlertsByProductAndDate(productId, availableOnDate);
	}

	@GetMapping("/byUserAndInterval")
	@ResponseStatus(HttpStatus.OK)
	public List<Alert> getAlertsByUserAndInterval(@RequestParam @NotNull Long userId, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate) {
		log.trace("getAlertsByUserAndInterval");

		return alertService.findAlertsByUserAndInterval(userId, fromDate, toDate);
	}

	@PostMapping
	public ResponseEntity<Long> createAlert(@RequestBody @Valid CreateAlertRequest createAlertRequest) {
		log.trace("createAlert");

		try {
			log.trace("Creating alert " + createAlertRequest);
			Long alertId = alertService.createAlert(Alert.builder()
					.productId(createAlertRequest.getProductId())
					.userId(createAlertRequest.getUserId())
					.from(createAlertRequest.getFrom())
					.to(createAlertRequest.getTo())
					.build());
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}")
					.buildAndExpand(alertId)
					.toUri();

			return ResponseEntity.created(uri).body(alertId);
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified userId " + createAlertRequest.getUserId() + " does not exist.", e);
		} catch (RestClientException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The specified productId " + createAlertRequest.getProductId() + " does not exist.", e);
		}
	}
}
