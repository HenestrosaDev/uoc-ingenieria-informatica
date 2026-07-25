package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface SpringDataMicrocredentialRepository extends JpaRepository<MicrocredentialEntity, Long> {

	public Optional<MicrocredentialEntity> getMicrocredentialById(Long id);

	public List<MicrocredentialEntity> findByStatus(MicrocredentialStatus status);

}
