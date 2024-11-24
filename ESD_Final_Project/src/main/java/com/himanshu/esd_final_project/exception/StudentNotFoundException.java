package com.himanshu.esd_final_project.exception;

import lombok.Data;

@Data
public class StudentNotFoundException extends RuntimeException {
    private final String message;
}
