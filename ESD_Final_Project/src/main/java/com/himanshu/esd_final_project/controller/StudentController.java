package com.himanshu.esd_final_project.controller;

import com.himanshu.esd_final_project.entity.Student;
import com.himanshu.esd_final_project.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;
    @GetMapping("/")
    public List<Object[]> showAllStudents()
    {
        return studentService.showAllStudents();
    }
}
