package edu.uoc.epcsd.microcredential.application.rest;


import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.service.MicrocredentialService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.validation.constraints.NotNull;
import java.net.URI;
import java.util.List;

@Log4j2
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/microcredentials")
public class MicrocredentialRESTController {

    private final MicrocredentialService microcredentialService;
    
    @PatchMapping("approve/{microcredentialId}/")
    public ResponseEntity<Boolean> approvePendingMicrocredential(@PathVariable @NotNull Long microcredentialId) {
        log.trace("approvePendingMicrocredential");
        try {
			log.trace("approve Pending Microcredential number " +microcredentialId);
            microcredentialService.approvePendingMicrocredential(microcredentialId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    } 
    
    @PatchMapping("reject/{microcredentialId}/")
    public ResponseEntity<Boolean> rejectPendingMicrocredential(@PathVariable @NotNull Long microcredentialId) {
        log.trace("rejectPendingMicrocredential");
        try {
			log.trace("reject Pending Microcredential number " +microcredentialId);
            microcredentialService.rejectPendingMicrocredential(microcredentialId);
                                
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    } 

    @PostMapping("/{courseId}/create")
    public ResponseEntity<Boolean> requestCourseMicrocredentials(@PathVariable @NotNull Long courseId) {
        log.trace("requestCourseMicrocredentials");

        try {
            log.trace("Creating Microcredentials for course " + courseId);
            Boolean result = microcredentialService.requestCourseMicrocredentials(courseId);  
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                    .buildAndExpand(result)
                    .toUri();

            return ResponseEntity.created(uri).body(result);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e+"", e);
        }
    }
    
    @GetMapping("/{microcredentialId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Microcredential> getMicrocredentialById(@PathVariable @NotNull Long microcredentialId) {
        log.trace("getMicrocredentialById");

        return microcredentialService.getMicrocredentialById(microcredentialId).map(session -> ResponseEntity.ok().body(session))
                .orElseThrow(() -> new IllegalArgumentException("The "+microcredentialId+"th microcredential does not exist!"));
    }
    
    @GetMapping("/")
    @ResponseStatus(HttpStatus.OK)
    public List<Microcredential> getPendingMicrocredentialRequests() {
       log.trace("getPendingMicrocredentials");

       return microcredentialService.getPendingMicrocredentialRequests();
    }

    
}
