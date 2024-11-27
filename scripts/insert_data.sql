-- INSERT INTO `departments` Table
INSERT INTO departments (id, name, capacity) VALUES
(1, 'Computer Science', 50),
(2, 'Electronics', 40);

-- INSERT INTO `specialisation` Table
INSERT INTO specialisation (id, code, name, description, credits_req, year) VALUES
(1, 'CS101', 'Artificial Intelligence', 'Specialisation in AI', 20, '2024'),
(2, 'EC202', 'Embedded Systems', 'Specialisation in Embedded Tech', 15, '2024');

-- INSERT INTO `domains` Table
INSERT INTO domains (id, program, batch, capacity, qualification) VALUES
(1, 'B.Tech', '2024', 120, 'Undergraduate'),
(2, 'M.Tech', '2023', 80, 'Postgraduate');

-- INSERT INTO `organisation` Table
INSERT INTO organisation (id, org, address) VALUES
(1, 'Google', '1600 Amphitheatre Parkway, Mountain View, CA'),
(2, 'Microsoft', 'One Microsoft Way, Redmond, WA');

-- INSERT INTO `placement` Table
INSERT INTO placement (id, org, profile, description, intake, min_grade) VALUES
(1, 'Google', 'Software Engineer', 'Role in developing software solutions', 10, 8.5),
(2, 'Microsoft', 'System Analyst', 'Role in analyzing systems and processes', 8, 8.0);

-- INSERT INTO `students` Table
INSERT INTO students (id, first_name, last_name, email, rollno, cgpa, graduation_year, total_credits, org, domain, specialisation, place_id, photo_path) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'CS202101', 9, 2024, 25, 'Google', 1, 1, 1, '/photos/john.jpg'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', 'CS202102', 7.5, 2024, 18, NULL, 1, 1, NULL, '/photos/jane.jpg'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', 'EC202103', 8.7, 2023, 22, 'Microsoft', 2, 2, 2, '/photos/alice.jpg'),
(4, 'Bob', 'Williams', 'bob.williams@example.com', 'EC202104', 7.9, 2023, 20, NULL, 2, 2, NULL, '/photos/bob.jpg');

-- INSERT INTO `alumni` Table
INSERT INTO alumni (id, sid, email, contact) VALUES
(1, 1, 'john.doe@alumni.com', 1234567890),
(2, 3, 'alice.johnson@alumni.com', 9876543210);

-- INSERT INTO `alumni_org` Table
INSERT INTO alumni_org (id, org, alumni_id, position, join_date, leave_date) VALUES
(1, 'Google', 1, 'Software Developer', '2024-06-01', '2026-06-01'),
(2, 'Microsoft', 2, 'System Analyst', '2023-05-01', NULL);

-- INSERT INTO `placememt_filter` Table
INSERT INTO placememt_filter (id, place_id, specialisation, domain) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2);

-- INSERT INTO `placement_student` Table
INSERT INTO placement_student (id, place_id, sid, cv_app, about, acceptance, comments, date) VALUES
(1, 1, 1, '/cv/john_doe.pdf', 'Top performer in AI', 'Accepted', 'Excited to join', '2024-05-20'),
(2, 2, 3, '/cv/alice_johnson.pdf', 'Expert in systems', 'Accepted', 'Looking forward', '2023-04-15');

