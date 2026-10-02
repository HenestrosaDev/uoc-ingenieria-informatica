package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Enrollment;
import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.exception.CourseNotFoundException;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CourseServiceImplTest {

	@Mock
	private CourseRepository courseRepository;

	@Mock
	private UserRepository userRepository;

	@Mock
	private EnrollmentRepository enrollmentRepository;

	@Mock
	private RestTemplate restTemplate;

	@InjectMocks
	private CourseServiceImpl courseService;

	@Captor
	private ArgumentCaptor<Enrollment> enrollmentCaptor;

	@Test
	void enrollInCourseShouldPersistEnrollmentWhenUserExists() {
		when(courseRepository.getCourseById(42L)).thenReturn(java.util.Optional.of(Course.builder().id(42L).status(CourseStatus.ENROLLMENT_OPEN).build()));
		when(userRepository.findUserByEmail("student@example.com")).thenReturn(true);
		when(enrollmentRepository.createEnrollment(any(Enrollment.class))).thenReturn(1L);

		courseService.enrollInCourse(42L, "student@example.com");

		verify(userRepository).findUserByEmail("student@example.com");
		verify(enrollmentRepository).createEnrollment(enrollmentCaptor.capture());

		Enrollment enrollment = enrollmentCaptor.getValue();
		assertEquals(42L, enrollment.getCourseId());
		assertEquals("student@example.com", enrollment.getStudent());
	}

	@Test
	void enrollInCourseShouldFailWhenUserDoesNotExist() {
		when(courseRepository.getCourseById(42L)).thenReturn(java.util.Optional.of(Course.builder().id(42L).status(CourseStatus.ENROLLMENT_OPEN).build()));
		when(userRepository.findUserByEmail("missing@example.com")).thenReturn(false);

		assertThrows(UserNotFoundException.class,
				() -> courseService.enrollInCourse(42L, "missing@example.com"));

		verify(userRepository).findUserByEmail("missing@example.com");
		verify(enrollmentRepository, never()).createEnrollment(any());
	}

	@Test
	void enrollInCourseShouldFailWhenCourseIsNotOpen() {
		when(courseRepository.getCourseById(42L)).thenReturn(java.util.Optional.of(Course.builder().id(42L).status(CourseStatus.ACTIVE).build()));

		assertThrows(IllegalArgumentException.class,
				() -> courseService.enrollInCourse(42L, "student@example.com"));

		verify(userRepository, never()).findUserByEmail(any());
		verify(enrollmentRepository, never()).createEnrollment(any());
	}

	@Test
	void enrollInCourseShouldFailWhenCourseDoesNotExist() {
		when(courseRepository.getCourseById(42L)).thenReturn(java.util.Optional.empty());

		assertThrows(CourseNotFoundException.class,
				() -> courseService.enrollInCourse(42L, "student@example.com"));

		verify(userRepository, never()).findUserByEmail(any());
		verify(enrollmentRepository, never()).createEnrollment(any());
	}
}