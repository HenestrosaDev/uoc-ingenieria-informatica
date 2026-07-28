package edu.uoc.epcsd.notification.domain.service;

import edu.uoc.epcsd.notification.application.kafka.MicrocredentialMessage;
import edu.uoc.epcsd.notification.application.kafka.ProductMessage;
import edu.uoc.epcsd.notification.application.rest.dtos.GetMicrocredentialResponse;
import edu.uoc.epcsd.notification.application.rest.dtos.GetProductResponse;
import edu.uoc.epcsd.notification.application.rest.dtos.GetUserResponse;
import edu.uoc.epcsd.notification.domain.MicrocredentialStatus;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.List;

@Log4j2
@Service
public class NotificationServiceImpl implements NotificationService {

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

        GetProductResponse product = new RestTemplate().getForEntity(productServiceUrl, GetProductResponse.class, productMessage.getProductId()).getBody();

        GetUserResponse[] usersToAlert = new RestTemplate().getForEntity(userToAlertUrl, GetUserResponse[].class, productMessage.getProductId(), LocalDate.now()).getBody();

        for (GetUserResponse user : usersToAlert) {
            log.info("Sending an email to user " + user.getFullName() + " at \"" + user.getEmail() + "\" to notify new units available on product \"" + product.getName() + "\".");
        }
    }
    
    @Override
    public void notifyCredentialPending(MicrocredentialMessage microcredentialMessage) {
        GetMicrocredentialResponse microcredential = new RestTemplate().getForEntity(microcredentialServiceUrl, GetMicrocredentialResponse.class, microcredentialMessage.getMicrocredentialId()).getBody();
        if(!microcredential.getStatus().equals(MicrocredentialStatus.REQUESTED)){
            throw new IllegalArgumentException("The microcredential " + microcredential.getId() + " is not in the request period !");
        }
        GetUserResponse user = new RestTemplate().exchange(usersServiceUrl + "/byEmail/{email}", HttpMethod.GET, null, GetUserResponse.class, "admin@uoc.edu").getBody();

        log.info("Sending an email to user " + user.getFullName() + " at \"" + user.getEmail() + "\" to notify new pending credential \"" + microcredential.getId() + "\".");
    }

	@Override
	public void notifyCredentialGranted(MicrocredentialMessage microcredentialMessage) {
		GetMicrocredentialResponse microcredential = new RestTemplate().getForEntity(microcredentialServiceUrl, GetMicrocredentialResponse.class, microcredentialMessage.getMicrocredentialId()).getBody();
        
        GetUserResponse user = new RestTemplate().exchange(usersServiceUrl + "/byEmail/{email}", HttpMethod.GET, null, GetUserResponse.class, microcredentialMessage.getUserEmail()).getBody();

        log.info("Sending an email to user " + user.getFullName() + " at \"" + user.getEmail() + "\" to notify approved credential \"" + microcredential.getId() + "\".");
	}

	@Override
	public void notifyCredentialRejected(MicrocredentialMessage microcredentialMessage) {
		GetMicrocredentialResponse microcredential = new RestTemplate().getForEntity(microcredentialServiceUrl, GetMicrocredentialResponse.class, microcredentialMessage.getMicrocredentialId()).getBody();
        GetUserResponse user = new RestTemplate().exchange(usersServiceUrl + "/byEmail/{email}", HttpMethod.GET, null, GetUserResponse.class, microcredentialMessage.getUserEmail()).getBody();
        log.info("Sending an email to user " + user.getFullName() + " at \"" + user.getEmail() + "\" to notify rejected credential \"" + microcredential.getId() + "\".");
	}

}
