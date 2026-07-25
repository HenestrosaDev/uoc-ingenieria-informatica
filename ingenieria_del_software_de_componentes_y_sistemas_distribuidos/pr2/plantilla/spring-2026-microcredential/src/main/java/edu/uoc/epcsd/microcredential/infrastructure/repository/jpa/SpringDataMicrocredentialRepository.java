package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface SpringDataMicrocredentialRepository extends JpaRepository<MicrocredentialEntity, Long> {

	public Optional<MicrocredentialEntity> getMicrocredentialById(Long id);

}
