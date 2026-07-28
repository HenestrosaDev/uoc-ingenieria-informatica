package edu.uoc.epcsd.course.domain.validator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class CourseValidatorTest {

    private CourseValidator validator;

    @BeforeEach
    void setUp() {
        validator = new CourseValidator();
    }

    @Test
    void testIsValidPrice() {
        assertThat(validator.isValidPrice(0L)).isTrue();
        assertThat(validator.isValidPrice(5000L)).isTrue();
        assertThat(validator.isValidPrice(10000L)).isTrue();
        assertThat(validator.isValidPrice(-1L)).isFalse();
        assertThat(validator.isValidPrice(10001L)).isFalse();
        assertThat(validator.isValidPrice(null)).isFalse();
    }

    @Test
    void testIsValidDuration() {
        assertThat(validator.isValidDuration(1L)).isTrue();
        assertThat(validator.isValidDuration(100L)).isTrue();
        assertThat(validator.isValidDuration(500L)).isTrue();
        assertThat(validator.isValidDuration(0L)).isFalse();
        assertThat(validator.isValidDuration(501L)).isFalse();
        assertThat(validator.isValidDuration(null)).isFalse();
    }

    @Test
    void testCalculateDiscount() {
        assertThat(validator.calculateDiscount(7000L)).isEqualTo(20);
        assertThat(validator.calculateDiscount(5000L)).isEqualTo(20);
        assertThat(validator.calculateDiscount(3000L)).isEqualTo(10);
        assertThat(validator.calculateDiscount(2000L)).isEqualTo(10);
        assertThat(validator.calculateDiscount(1000L)).isEqualTo(5);
        assertThat(validator.calculateDiscount(1999L)).isEqualTo(5);
        assertThat(validator.calculateDiscount(0L)).isEqualTo(5);
        assertThat(validator.calculateDiscount(-1L)).isEqualTo(0);
        assertThat(validator.calculateDiscount(null)).isEqualTo(0);
    }
}