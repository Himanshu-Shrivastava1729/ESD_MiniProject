package com.himanshu.esd_final_project.repo;

import com.himanshu.esd_final_project.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

    @Query(value = "select s.first_name,s.last_name,s.organization,s.grad_year,a.year_joined,s.position,a.job_position from student s left join alumni a"
        + " on s.organization = a.organization"
        + " where s.organization = :keyword",nativeQuery = true)
    List<Map<String,Object>> getStudentsByOrganization(@Param("keyword") String keyword);

}
