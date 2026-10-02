package edu.uoc.epcsd.course.domain.service;

import au.com.dius.pact.consumer.MockServer;
import au.com.dius.pact.consumer.dsl.PactBuilder;
import au.com.dius.pact.consumer.junit5.PactConsumerTestExt;
import au.com.dius.pact.consumer.junit5.PactTestFor;
import au.com.dius.pact.core.model.annotations.Pact;
import au.com.dius.pact.core.model.V4Pact;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.ArrayList;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(PactConsumerTestExt.class)
class CourseServicePactConsumerTest {

    private final CourseRepository courseRepository = mock(CourseRepository.class);
    private final UserRepository userRepository = mock(UserRepository.class);
    private final EnrollmentRepository enrollmentRepository = mock(EnrollmentRepository.class);
    private final EnrollmentService enrollmentService = mock(EnrollmentService.class);

    @Pact(consumer = "CourseService", provider = "MicroCredentialsService")
        V4Pact microcredentialCreationContract(PactBuilder builder) {
        builder.expectsToReceiveHttpInteraction("successful microcredential creation for course 1", interaction -> interaction
            .state("course 1 exists and is closed")
            .withRequest(request -> request
                .method("POST")
                .path("/microcredentials/1/create"))
            .willRespondWith(response -> response
                .status(201)
                .body("true")));
        builder.expectsToReceiveHttpInteraction("failed microcredential creation for missing course 999", interaction -> interaction
            .state("course 999 does not exist")
            .withRequest(request -> request
                .method("POST")
                .path("/microcredentials/999/create"))
            .willRespondWith(response -> response
                .status(400)));
        return builder.toPact();
    }

    @Test
    @PactTestFor(pactMethod = "microcredentialCreationContract")
    void closeCourse_shouldMatchSuccessAndBadRequestContracts(MockServer mockServer) {
        CourseServiceImpl courseService = createCourseService(mockServer.getUrl());

        Course closedCourse = buildCourse(1L);
        when(courseRepository.getCourseById(1L)).thenReturn(Optional.of(closedCourse));
        when(courseRepository.closeEnrollmentCourse(any(Course.class))).thenReturn(1L);

        Long result = courseService.closeCourse(1L);

        assertThat(result).isEqualTo(1L);
        verify(enrollmentService).closeCourse(1L);

        Course missingCourse = buildCourse(999L);
        when(courseRepository.getCourseById(999L)).thenReturn(Optional.of(missingCourse));
        when(courseRepository.closeEnrollmentCourse(any(Course.class))).thenReturn(999L);

        assertThatThrownBy(() -> courseService.closeCourse(999L))
                .isInstanceOf(org.springframework.web.client.HttpClientErrorException.BadRequest.class);
    }

    private CourseServiceImpl createCourseService(String baseUrl) {
        CourseServiceImpl courseService = new CourseServiceImpl(
                courseRepository,
                userRepository,
                enrollmentRepository,
                enrollmentService);
        ReflectionTestUtils.setField(
                courseService,
                "microcredentialServiceUrl",
                baseUrl + "/microcredentials/{courseId}/create");
        return courseService;
    }

    private Course buildCourse(Long courseId) {
        Course course = Course.builder()
                .id(courseId)
                .instructor("instructor@example.com")
                .enrollment(new ArrayList<>())
                .title("Course title")
                .description("Course description")
                .enrollmentStartDate(new java.util.Date())
                .enrollmentEndDate(new java.util.Date())
                .mode("ONLINE")
                .price(100L)
                .objectives("Objectives")
                .methology("Methodology")
                .duration(10L)
                .language("EN")
                .location("Remote")
                .build();
        course.setStatus(CourseStatus.PENDING_CLOSUE);
        return course;
    }
}