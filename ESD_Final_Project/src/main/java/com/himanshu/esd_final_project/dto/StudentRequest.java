package com.himanshu.esd_final_project.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.himanshu.esd_final_project.entity.Domains;
import com.himanshu.esd_final_project.entity.Specialisation;
import jakarta.validation.constraints.*;
import jakarta.validation.constraints.NotEmpty;


public record StudentRequest(
    @NotNull(message = "first name is required")
    @NotBlank(message = "first name is required")
    @NotEmpty(message = "first name is required")
    @JsonProperty("first_name")
    String firstName,

    @JsonProperty("last_name")
    String lastName,

    @NotNull(message = "email required")
    @Email(message = "email should be in correct format")
    @JsonProperty("email")
    String email,

    @JsonProperty("domain")
    Domains domain,

    @JsonProperty("total_credits")
    double credits,

    @JsonProperty("cgpa")
    int cgpa,

    @JsonProperty("graduation_year")
    int gradYear,

    @JsonProperty("org")
    String organization,

    @JsonProperty("specialisation")
    Specialisation specialisation
)
{
}
