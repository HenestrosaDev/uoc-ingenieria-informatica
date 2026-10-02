package edu.uoc.epcsd.microcredential.application.rest;

import au.com.dius.pact.provider.junit5.PactVerificationContext;
import au.com.dius.pact.provider.junit5.PactVerificationInvocationContextProvider;
import au.com.dius.pact.provider.junit5.HttpTestTarget;
import au.com.dius.pact.provider.junitsupport.Provider;
import au.com.dius.pact.provider.junitsupport.State;
import au.com.dius.pact.provider.junitsupport.loader.PactFolder;
import edu.uoc.epcsd.microcredential.domain.service.MicrocredentialService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;

import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Provider("MicroCredentialsService")
@PactFolder("src/test/resources/pacts")
@ExtendWith(PactVerificationInvocationContextProvider.class)
class MicrocredentialRESTControllerPactProviderTest {

    @LocalServerPort
    private int port;

    @MockBean
    private MicrocredentialService microcredentialService;

    @BeforeEach
    void before(PactVerificationContext context) {
        context.setTarget(new HttpTestTarget("localhost", port, "/"));
    }

    @TestTemplate
    void pactVerificationTest(PactVerificationContext context) {
        context.verifyInteraction();
    }

    @State("course 1 exists and is closed")
    void courseExistsAndIsClosed() {
        when(microcredentialService.requestCourseMicrocredentials(1L)).thenReturn(true);
    }

    @State("course 999 does not exist")
    void courseDoesNotExist() {
        when(microcredentialService.requestCourseMicrocredentials(999L))
                .thenThrow(new IllegalArgumentException("The 999th course does not exist!"));
    }
}