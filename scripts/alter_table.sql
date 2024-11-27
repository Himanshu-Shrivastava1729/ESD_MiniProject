-- Alumni Table
ALTER TABLE alumni 
ADD CONSTRAINT fk_alumni_student 
FOREIGN KEY (sid) REFERENCES students(id);

-- Alumni Organisation Table
ALTER TABLE alumni_org
ADD CONSTRAINT fk_alumni_org_organisation 
FOREIGN KEY (org) REFERENCES organisation(org),
ADD CONSTRAINT fk_alumni_org_alumni 
FOREIGN KEY (alumni_id) REFERENCES alumni(id);

-- Employee Table
ALTER TABLE employee
ADD CONSTRAINT fk_employee_department 
FOREIGN KEY (department) REFERENCES departments(name);

-- Organisation Table
ALTER TABLE organisation
ADD CONSTRAINT fk_organisation_placement 
FOREIGN KEY (org) REFERENCES placement(org);

-- Placement Table
ALTER TABLE placement
ADD CONSTRAINT fk_placement_organisation 
FOREIGN KEY (org) REFERENCES organisation(org);

-- Placement Filter Table
ALTER TABLE placememt_filter
ADD CONSTRAINT fk_placement_filter_placement 
FOREIGN KEY (place_id) REFERENCES placement(id),
ADD CONSTRAINT fk_placement_filter_specialisation 
FOREIGN KEY (specialisation) REFERENCES specialisation(id),
ADD CONSTRAINT fk_placement_filter_domain 
FOREIGN KEY (domain) REFERENCES domains(id);

-- Placement Student Table
ALTER TABLE placement_student
ADD CONSTRAINT fk_placement_student_placement 
FOREIGN KEY (place_id) REFERENCES placement(id),
ADD CONSTRAINT fk_placement_student_student 
FOREIGN KEY (sid) REFERENCES students(id);

-- Students Table
ALTER TABLE students
ADD CONSTRAINT fk_student_domain 
FOREIGN KEY (domain) REFERENCES domains(id),
ADD CONSTRAINT fk_student_specialisation 
FOREIGN KEY (specialisation) REFERENCES specialisation(id),
ADD CONSTRAINT fk_student_placement 
FOREIGN KEY (place_id) REFERENCES placement(id);
