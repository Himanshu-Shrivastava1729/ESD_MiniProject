package com.himanshu.esd_final_project.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "placement_student")
public class PlacementStudent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "place_id")
    private Placement placement;

    @ManyToOne
    @JoinColumn(name = "sid")
    private Student student;

    @Column(name = "cv_app")
    private String cvApp;

    @Column(name = "about")
    private String about;

    @Column(name = "acceptance")
    private String acceptance;

    @Column(name = "comments")
    private String comments;

    @Column(name = "date")
    private LocalDate date;

}
