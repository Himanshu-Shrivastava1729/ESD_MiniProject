package com.himanshu.esd_final_project.repo;

import com.himanshu.esd_final_project.entity.Student;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

    @Query(value = "select s.first_name,s.last_name,s.email,case when" +
            " exists(select 1 from placement_student p where s.id = p.sid) then 'Placed' else " +
            "'Unplaced' end as placement_status" + " from students s" ,nativeQuery = true)
    public List<Object[]> showAllStudents();
}
