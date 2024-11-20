package com.himanshu.esd_final_project.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "organisation")
public class Organisation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "org",unique = true)
    private String org;

    @OneToMany(mappedBy = "org")
    private List<Placement> placements;

    @OneToMany(mappedBy = "organisation")
    private List<AlumniOrganisation> alumniOrganisations;

    @Column(name = "address")
    private String address;
}
