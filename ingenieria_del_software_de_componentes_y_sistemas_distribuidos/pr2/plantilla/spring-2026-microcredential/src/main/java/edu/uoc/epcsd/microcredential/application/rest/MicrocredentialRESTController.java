package edu.uoc.epcsd.microcredential.application.rest;


import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.service.MicrocredentialService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.constraints.NotNull;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/microcredentials")
public class MicrocredentialRESTController {

	private final MicrocredentialService microcredentialService;

	@GetMapping("/{microcredentialId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Microcredential> getMicrocredentialById(@PathVariable @NotNull Long microcredentialId) {
		//TODO: Complete the implementation
		return null;
	}

	//TODO: approvePendingMicrocredential()



	//TODO: rejectPendingMicrocredential() 



	//TODO: requestCourseMicrocredentials()



	//TODO: getPendingMicrocredentialRequests()

}
