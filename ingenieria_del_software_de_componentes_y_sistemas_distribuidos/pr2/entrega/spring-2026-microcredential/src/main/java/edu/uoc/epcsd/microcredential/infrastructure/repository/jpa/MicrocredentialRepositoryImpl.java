package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;
import edu.uoc.epcsd.microcredential.domain.repository.MicrocredentialRepository;
import lombok.RequiredArgsConstructor;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import static edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus.REQUESTED;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MicrocredentialRepositoryImpl implements MicrocredentialRepository {

	private final SpringDataMicrocredentialRepository jpaMicrocredentialRepository;

	/**
	 * Retrieves a microcredential by its unique identifier.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to retrieve
	 * @return an Optional containing the Microcredential if found, or empty otherwise
	 */
	@Override
	public Optional<Microcredential> getMicrocredentialById(Long microcredentialId) {
		return jpaMicrocredentialRepository.getMicrocredentialById(microcredentialId).map(MicrocredentialEntity::toDomain);
	}

	/**
	 * Creates a new microcredential with the provided information.
	 * The microcredential is persisted in the database.
	 *
	 * @param microcredential the Microcredential entity to create
	 * @return the unique identifier of the newly created microcredential
	 */
	public Long createMicrocredential(Microcredential microcredential) {
		MicrocredentialEntity entity = MicrocredentialEntity.fromDomain(microcredential);
		MicrocredentialEntity saved = jpaMicrocredentialRepository.save(entity);
		return saved.getId();
	}

	/**
	 * Updates the status of a pending microcredential.
	 * If the microcredential exists, its status is updated to the provided value.
	 *
	 * @param microcredentialId the unique identifier of the microcredential to update
	 * @param status the new status value to assign to the microcredential
	 */
	public void updateStatusPendingMicrocredential(Long microcredentialId, String status) {
		Optional<MicrocredentialEntity> optionalEntity = jpaMicrocredentialRepository.findById(microcredentialId);
		if (optionalEntity.isPresent()) {
			MicrocredentialEntity entity = optionalEntity.get();
			entity.setStatus(MicrocredentialStatus.valueOf(status));
			jpaMicrocredentialRepository.save(entity);
		}
	}

	/**
	 * Retrieves all microcredentials with a REQUESTED status.
	 * These are pending microcredentials awaiting approval or rejection.
	 *
	 * @return a list of all Microcredentials with REQUESTED status
	 */
	public java.util.List<Microcredential> getPendingMicrocredentialRequests() {
		return jpaMicrocredentialRepository.findByStatus(REQUESTED)
				.stream().map(MicrocredentialEntity::toDomain).collect(java.util.stream.Collectors.toList());
	}


}
