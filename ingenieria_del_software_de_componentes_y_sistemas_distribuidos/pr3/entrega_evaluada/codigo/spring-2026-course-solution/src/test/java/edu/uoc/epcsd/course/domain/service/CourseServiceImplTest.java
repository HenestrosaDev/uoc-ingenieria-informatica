package edu.uoc.epcsd.course.domain.service;

import edu.uoc.epcsd.course.domain.Course;
import edu.uoc.epcsd.course.domain.CourseStatus;
import edu.uoc.epcsd.course.domain.exception.UserNotFoundException;
import edu.uoc.epcsd.course.domain.repository.CourseRepository;
import edu.uoc.epcsd.course.domain.repository.EnrollmentRepository;
import edu.uoc.epcsd.course.domain.repository.UserRepository;
import io.qameta.allure.Allure;
import io.qameta.allure.Epic;
import io.qameta.allure.Feature;
import io.qameta.allure.Story;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.Mockito.when;

@Epic("Gestión de Cursos")
@Feature("Creación de Cursos")
@ExtendWith(MockitoExtension.class)
class CourseServiceImplTest {

    @Mock
    private CourseRepository courseRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private EnrollmentRepository enrollmentRepository;

    @Mock
    private EnrollmentService enrollmentService;

    @InjectMocks
    private CourseServiceImpl courseService;

    @Test
    @DisplayName("Crear curso cuando el instructor existe")
    @Story("Creación exitosa de curso en estado DRAFT")
    void createCourse_whenInstructorExists_shouldPersistCourseWithDraftStatus() {
        Course course = buildCourse("instructor@example.com");
        attachCourseContext("Escenario de creación exitosa", course);
        when(userRepository.findInstructorByEmail(course.getInstructor())).thenReturn(true);
        when(courseRepository.createCourse(course)).thenReturn(42L);

        Long courseId = courseService.createCourse(course);

        assertThat(courseId).isEqualTo(42L);
        assertThat(course.getStatus()).isEqualTo(CourseStatus.DRAFT);
        ArgumentCaptor<Course> courseCaptor = ArgumentCaptor.forClass(Course.class);
        verify(courseRepository).createCourse(courseCaptor.capture());
        assertThat(courseCaptor.getValue().getStatus()).isEqualTo(CourseStatus.DRAFT);
    }

    @Test
    @DisplayName("Fallar cuando el instructor no existe")
    @Story("Intento de creación con instructor inexistente")
    void createCourse_whenInstructorDoesNotExist_shouldThrowAndNotCreateCourse() {
        Course course = buildCourse("missing-instructor@example.com");
        attachCourseContext("Escenario de fallo por instructor inexistente", course);
        when(userRepository.findInstructorByEmail(course.getInstructor())).thenReturn(false);

        assertThatThrownBy(() -> courseService.createCourse(course))
                .isInstanceOf(UserNotFoundException.class)
                .hasMessage("User with id 'missing-instructor@example.com' not found");

        verify(courseRepository, never()).createCourse(any());
        verifyNoInteractions(courseRepository);
    }

    private Course buildCourse(String instructor) {
        return Course.builder()
                .id(1L)
                .instructor(instructor)
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
    }

    private void attachCourseContext(String title, Course course) {
        Allure.step(title);
        Allure.attachment("Contexto del curso", String.format(
                "Instructor: %s%nTítulo: %s%nEstado inicial: %s%nModo: %s%nIdioma: %s%nUbicación: %s%n",
                course.getInstructor(),
                course.getTitle(),
                course.getStatus(),
                course.getMode(),
                course.getLanguage(),
                course.getLocation()));
    }
}