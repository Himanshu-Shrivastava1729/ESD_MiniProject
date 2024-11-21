package com.himanshu.esd_final_project.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "alumni")
public class Alumni {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    //sid here is fk referencing sid of students table.
    @ManyToOne
    @JoinColumn(name = "sid")
    private Student student;

    @OneToMany(mappedBy = "alumni")
    private List<AlumniOrganisation> alumniOrganisations;

    @Column(name = "email")
    private String email;

    @Column(name = "contact")
    private long contact;

}
