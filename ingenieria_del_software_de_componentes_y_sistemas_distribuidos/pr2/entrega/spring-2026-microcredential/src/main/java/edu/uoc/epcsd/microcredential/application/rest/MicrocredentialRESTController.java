package edu.uoc.epcsd.microcredential.application.rest;


import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.service.MicrocredentialServiceImpl;
import edu.uoc.epcsd.microcredential.domain.service.MicrocredentialService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import edu.uoc.epcsd.microcredential.application.rest.request.ApproveRejectRequest;
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

	/**
	 * Retrieves a specific microcredential by its unique identifier.
	 * Returns HTTP 200 OK with the microcredential data if found,
	 * or HTTP 404 NOT FOUND if the microcredential does not exist.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to retrieve
	 * @return ResponseEntity containing the Microcredential if found, or a not found response
	 */
	@GetMapping("/{microcredentialId}")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Microcredential> getMicrocredentialById(@PathVariable @NotNull Long microcredentialId) {
		return microcredentialService.getMicrocredentialById(microcredentialId)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	/**
	 * Approves a pending microcredential request.
	 * The microcredential status is updated to GRANTED and a notification is sent.
	 * Returns HTTP 200 OK on successful approval.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to approve
	 * @param approveRequest contains user email and course ID for the approval notification
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@PatchMapping("/{microcredentialId}/approve")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> approvePendingMicrocredential(
			@PathVariable @NotNull Long microcredentialId,
			@RequestBody @NotNull ApproveRejectRequest approveRequest) {
		((MicrocredentialServiceImpl) microcredentialService)
			.approvePendingMicrocredential(microcredentialId, approveRequest.getUserEmail(), approveRequest.getCourseId());
			return ResponseEntity.ok().build();
	}

	/**
	 * Rejects a pending microcredential request.
	 * The microcredential status is updated to REJECTED and a notification is sent.
	 * Returns HTTP 200 OK on successful rejection.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to reject
	 * @param approveRequest contains user email and course ID for the rejection notification
	 * @return ResponseEntity with HTTP 200 OK status
	 */
	@PatchMapping("/{microcredentialId}/reject")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Void> rejectPendingMicrocredential(
			@PathVariable @NotNull Long microcredentialId,
			@RequestBody @NotNull ApproveRejectRequest approveRequest) {
		((MicrocredentialServiceImpl) microcredentialService)
			.rejectPendingMicrocredential(microcredentialId, approveRequest.getUserEmail(), approveRequest.getCourseId());
			return ResponseEntity.ok().build();
	}

	/**
	 * Requests microcredentials for all students enrolled in a specific course.
	 * This operation creates microcredential requests for enrolled students
	 * and sends notification messages.
	 * Returns HTTP 200 OK with a boolean indicating success or failure.
	 *
	 * @param courseId the unique identifier of the course for which to request microcredentials
	 * @return ResponseEntity containing true if microcredentials were successfully requested, false otherwise
	 */
	@PostMapping("/courses/{courseId}/request")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<Boolean> requestCourseMicrocredential(@PathVariable @NotNull Long courseId) {
		boolean result = ((MicrocredentialServiceImpl) microcredentialService)
				.requestCourseMicrocredential(courseId);
		return ResponseEntity.ok(result);
	}

	/**
	 * Retrieves all pending microcredential requests with REQUESTED status.
	 * These are microcredentials awaiting approval or rejection.
	 * Returns HTTP 200 OK with a list of pending microcredentials.
	 *
	 * @return ResponseEntity containing a list of all pending Microcredentials
	 */
	@GetMapping("/pending")
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<java.util.List<Microcredential>> getPendingMicrocredentialRequests() {
		return ResponseEntity.ok(((MicrocredentialServiceImpl) microcredentialService)
				.getPendingMicrocredentialRequests());
	}

}
