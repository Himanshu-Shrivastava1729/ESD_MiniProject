package com.himanshu.esd_final_project.controller;

import com.himanshu.esd_final_project.entity.Student;
import com.himanshu.esd_final_project.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/student")
public class StudentController {
    private final StudentService studentService;
    @GetMapping("/")
    public ResponseEntity<List<Object[]>> showAllStudents()
    {
        return ResponseEntity.ok(studentService.showAllStudents());
    }
    @GetMapping("/{keyword}")
    public List<Object[]> showStudentsByKeyword(@PathVariable String keyword)
    {
        System.out.println(keyword);
        return studentService.showStudentsByKeyword(keyword);
    }

}
