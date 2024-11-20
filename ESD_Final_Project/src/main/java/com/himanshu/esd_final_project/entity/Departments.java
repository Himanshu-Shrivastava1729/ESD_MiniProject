package com.himanshu.esd_final_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.swing.event.ListDataEvent;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "departments")
public class Departments {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name",unique = true)
    private String name;

    @OneToMany(mappedBy = "departments")
    private List<Employee> employees;

    @Column(name = "capacity")
    private Integer capacity;
}
