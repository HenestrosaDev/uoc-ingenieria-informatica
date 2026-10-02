package edu.uoc.epcsd.microcredential.infrastructure.repository.jpa;

import edu.uoc.epcsd.microcredential.domain.Microcredential;
import edu.uoc.epcsd.microcredential.domain.MicrocredentialStatus;
import edu.uoc.epcsd.microcredential.domain.repository.MicrocredentialRepository;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MicrocredentialRepositoryImpl implements MicrocredentialRepository {

    private final SpringDataMicrocredentialRepository jpaMicrocredentialRepository;
    
    @Override
    public Long createMicrocredential(Microcredential microcredential) {

    	MicrocredentialEntity microcredentialEntity = MicrocredentialEntity.fromDomain(microcredential);
    	microcredentialEntity.setStatus(microcredential.getStatus());
        
        return jpaMicrocredentialRepository.save(microcredentialEntity).getId(); 
    }
    
    @Override
    public Long updateStatusPendingMicrocredential(Microcredential microcredential) {   
        MicrocredentialEntity microcredentialEntity = jpaMicrocredentialRepository.findById(microcredential.getId()).orElseThrow(IllegalArgumentException::new);       
        microcredentialEntity.setStatus(microcredential.getStatus());    
        
        return jpaMicrocredentialRepository.save(microcredentialEntity).getId(); 
    }
    
    @Override
    public List<Microcredential> getPendingMicrocredentialRequests() {
        return jpaMicrocredentialRepository.findMicrocredentialsByStatus(MicrocredentialStatus.REQUESTED).stream().map(MicrocredentialEntity::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<Microcredential> getMicrocredentialById(Long microcredentialId) {
        return jpaMicrocredentialRepository.getMicrocredentialById(microcredentialId).map(MicrocredentialEntity::toDomain);
    } 
    
}
