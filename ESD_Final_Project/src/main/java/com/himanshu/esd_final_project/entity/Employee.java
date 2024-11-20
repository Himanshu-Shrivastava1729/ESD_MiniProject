package com.himanshu.esd_final_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long eid;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "title")
    private String title;

    @Column(name = "photograph_path")
    private String photographPath;

    @ManyToOne
    @JoinColumn(name = "department",referencedColumnName = "name")
    private Departments departments;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;
}
