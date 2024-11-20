package com.himanshu.esd_final_project.entity;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "domains")
public class Domains {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "domain")
    private List<PlacementFilter> placementFilters;

    @OneToMany(mappedBy = "domain")
    private List<Student> students;

    @Column(name = "program")
    private String program;

    @Column(name = "batch")
    private String batch;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "qualification")
    private String qualification;
}
