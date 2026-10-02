package edu.uoc.epcsd.course.domain.validator;

public class CourseValidator {

    private static final int MIN_PRICE = 0;
    private static final int MAX_PRICE = 10000;
    private static final int MIN_DURATION = 1;
    private static final int MAX_DURATION = 500;

    /**
     * Validates whether a course price is valid.
     * It must be between 0 and 10000.
     */
    public boolean isValidPrice(Long price) {
        if (price == null) {
            return false;
        }
        return price >= MIN_PRICE && price <= MAX_PRICE;
    }

    /**
     * Validates whether the course duration is valid.
     * It must be between 1 and 500 hours.
     */
    public boolean isValidDuration(Long duration) {
        if (duration == null) {
            return false;
        }
        return duration >= MIN_DURATION && duration <= MAX_DURATION;
    }

    /**
     * Calculates the applicable discount based on the price.
     * - Price >= 5000: 20% discount
     * - Price >= 2000: 10% discount
     * - Otherwise: 5% discount
     */
    public int calculateDiscount(Long price) {
        if (price == null || price < 0) {
            return 0;
        }
        if (price >= 5000) {
            return 20;
        } else if (price >= 2000) {
            return 10;
        } else {
            return 5;
        }
    }
}