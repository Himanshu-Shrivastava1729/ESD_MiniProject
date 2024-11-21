package com.himanshu.esd_final_project.service;

import com.himanshu.esd_final_project.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public List<Object[]> showAllStudents() {
        return studentRepo.showAllStudents();
    }
}
