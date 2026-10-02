package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataMicrocredentialRepository extends JpaRepository<MicrocredentialEntity, Long> {


	public Optional<MicrocredentialEntity> getMicrocredentialById(Long id);
	
	@Query("select a from microcredential a where a.status = ?1 ")
	public Optional<MicrocredentialEntity> findMicrocredentialByStatus(MicrocredentialStatus status);

    public List<MicrocredentialEntity> findMicrocredentialsByStatus(MicrocredentialStatus status);

}
