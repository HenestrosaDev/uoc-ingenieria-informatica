package edu.uoc.epcsd.notification.application.rest.dtos;


import lombok.*;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Builder
@AllArgsConstructor
@NoArgsConstructor
public final class GetProductResponse {

    private Long id;

    private String name;

    private String description;

    private Double dailyPrice;

    private String brand;

    private String model;

    private Long categoryId;

}
