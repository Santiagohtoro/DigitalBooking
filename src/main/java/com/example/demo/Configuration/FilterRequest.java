package com.example.demo.Configuration;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Getter
@Setter
public class FilterRequest {
    @NotBlank
    private String ciudad;
    @NotBlank
    private LocalDate fechaInicio;
    @NotBlank
    private LocalDate fechaFin;
}
