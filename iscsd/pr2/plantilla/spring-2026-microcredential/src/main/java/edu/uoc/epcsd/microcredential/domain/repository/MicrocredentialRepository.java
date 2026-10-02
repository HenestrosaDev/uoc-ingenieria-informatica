package edu.uoc.epcsd.microcredential.domain.repository;

import edu.uoc.epcsd.microcredential.domain.Microcredential;

import java.util.List;
import java.util.Optional;

public interface MicrocredentialRepository {

	Optional<Microcredential> getMicrocredentialById(Long microcredentialId);


}
