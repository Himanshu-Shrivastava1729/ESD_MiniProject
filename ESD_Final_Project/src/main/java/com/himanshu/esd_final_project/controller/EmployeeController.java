package com.himanshu.esd_final_project.controller;


import com.himanshu.esd_final_project.dto.EmployeeRequest;
import com.himanshu.esd_final_project.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping("/create")
    public ResponseEntity<String> createEmployee(@RequestBody EmployeeRequest request)
    {
        boolean isCreated = employeeService.createEmployee(request);
        String res;
        if(isCreated)
        {
            res = "Employee created successfully";
        }
        else
        {
            res = "Employee creation failed";
        }
        return ResponseEntity.ok(res);
    }
}
