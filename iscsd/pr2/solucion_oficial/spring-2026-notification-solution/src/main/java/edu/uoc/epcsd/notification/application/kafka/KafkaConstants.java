package edu.uoc.epcsd.notification.application.kafka;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.NONE)
public final class KafkaConstants {

    // misc
    public static final String SEPARATOR = ".";

    // topic items
    public static final String PRODUCT_TOPIC = "product";

    // commands
    public static final String UNIT_AVAILABLE = "unit_available";
    
    // topic items
    public static final String MICROCREDENTIAL_TOPIC = "microcredential";
    
    // commands
    public static final String APPROVED = "microcredential_approved";
    
    public static final String REJECTED = "microcredential_rejected";
    
    public static final String PENDING = "microcredential_pending";

}
