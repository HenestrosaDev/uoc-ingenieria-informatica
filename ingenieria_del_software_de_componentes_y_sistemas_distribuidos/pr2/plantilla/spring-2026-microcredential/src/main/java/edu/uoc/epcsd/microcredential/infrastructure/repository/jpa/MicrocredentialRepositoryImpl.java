package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.repository.MicrocredentialRepository;
import lombok.RequiredArgsConstructor;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MicrocredentialRepositoryImpl implements MicrocredentialRepository {

	private final SpringDataMicrocredentialRepository jpaMicrocredentialRepository;

	@Override
	public Optional<Microcredential> getMicrocredentialById(Long microcredentialId) {
		//TODO: Complete the implementation
		return null;
	} 

	//TODO: createMicrocredential() 

	//TODO: updateStatusPendingMicrocredential()

	//TODO: getPendingMicrocredentialRequests()


}
