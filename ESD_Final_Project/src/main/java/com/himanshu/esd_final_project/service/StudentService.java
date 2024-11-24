package com.himanshu.esd_final_project.service;

import com.himanshu.esd_final_project.exception.StudentNotFoundException;
import com.himanshu.esd_final_project.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.lang.String.format;

@Service
public class StudentService {
    private final StudentRepo studentRepo;

    public StudentService(StudentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }

    public List<Object[]> showAllStudents() {
        return studentRepo.showAllStudents();
    }

    public List<Object[]> showStudentsByKeyword(String keyword) {
        List<Object[]> objects =  studentRepo.showStudentsByKeyword(keyword);
        if(objects == null)
        {
            throw  new StudentNotFoundException(String.format("Student with keyword %s not found", keyword));
        }
        return objects;
    }
}
