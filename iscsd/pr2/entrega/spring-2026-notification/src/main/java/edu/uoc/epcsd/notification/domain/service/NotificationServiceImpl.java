package edu.uoc.epcsd.notification.domain.service;

import edu.uoc.epcsd.notification.application.kafka.MicrocredentialMessage;
import edu.uoc.epcsd.notification.application.kafka.ProductMessage;
import edu.uoc.epcsd.notification.application.rest.dtos.GetProductResponse;
import edu.uoc.epcsd.notification.application.rest.dtos.GetUserResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

@Log4j2
@Service
public class NotificationServiceImpl implements NotificationService {
	@Autowired
	private RestTemplate restTemplate;

	@Value("${usersService.getUsersToAlert.url}")
	private String userToAlertUrl;

	@Value("${usersService.url}")
	private String usersServiceUrl;

	@Value("${productService.getProductDetails.url}")
	private String productServiceUrl;

	@Value("${microcredentialService.getMicrocredentialDetails.url}")
	private String microcredentialServiceUrl;

	@Override
	public void notifyProductAvailable(ProductMessage productMessage) {

		GetProductResponse product = restTemplate.getForEntity(productServiceUrl, GetProductResponse.class, productMessage.getProductId()).getBody();

		GetUserResponse[] usersToAlert = restTemplate.getForEntity(userToAlertUrl, GetUserResponse[].class, productMessage.getProductId(), LocalDate.now()).getBody();

		for (GetUserResponse user : usersToAlert) {
			log.info("Sending an email to user " + user.getFullName() + " at \"" + user.getEmail() + "\" to notify new units available on product \"" + product.getName() + "\".");
		}
	}

	@Override
	public void notifyCredentialPending(MicrocredentialMessage microcredentialMessage) {
		log.info("Sending an email to user at \"" + microcredentialMessage.getUserEmail() + "\" to notify microcredential pending for course with id \"" + microcredentialMessage.getCourseId() + "\".");
	}

	@Override
	public void notifyCredentialGranted(MicrocredentialMessage microcredentialMessage) {
		log.info("Sending an email to user at \"" + microcredentialMessage.getUserEmail() + "\" to notify microcredential granted for course with id \"" + microcredentialMessage.getCourseId() + "\".");
	}

	@Override
	public void notifyCredentialRejected(MicrocredentialMessage microcredentialMessage) {
		log.info("Sending an email to user at \"" + microcredentialMessage.getUserEmail() + "\" to notify microcredential rejected for course with id \"" + microcredentialMessage.getCourseId() + "\".");
	}

}
