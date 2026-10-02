package edu.uoc.epcsd.microcredential.domain.repository;

import edu.uoc.epcsd.microcredential.domain.Microcredential;

import java.util.List;
import java.util.Optional;

public interface MicrocredentialRepository {
	
	Long updateStatusPendingMicrocredential(Microcredential microcredential);

	Long createMicrocredential(Microcredential microcredential);

	Optional<Microcredential> getMicrocredentialById(Long microcredentialId);

	List<Microcredential> getPendingMicrocredentialRequests();
	
}
