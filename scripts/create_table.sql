-- Alumni Table
CREATE TABLE alumni (
    id BIGINT PRIMARY KEY,
    sid BIGINT,
    email VARCHAR(255),
    contact BIGINT
);

-- Alumni Organisation Table
CREATE TABLE alumni_org (
    id BIGINT PRIMARY KEY,
    org VARCHAR(255),
    alumni_id BIGINT,
    position VARCHAR(255),
    join_date DATE,
    leave_date DATE
);

-- Departments Table
CREATE TABLE departments (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    capacity INT
);

-- Domains Table
CREATE TABLE domains (
    id BIGINT PRIMARY KEY,
    program VARCHAR(255),
    batch VARCHAR(255),
    capacity INT,
    qualification VARCHAR(255)
);

-- Employee Table
CREATE TABLE employee (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    title VARCHAR(255),
    photograph_path VARCHAR(255),
    department VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

-- Organisation Table
CREATE TABLE organisation (
    id BIGINT PRIMARY KEY,
    org VARCHAR(255) UNIQUE,
    address VARCHAR(255)
);

-- Placement Table
CREATE TABLE placement (
    id BIGINT PRIMARY KEY,
    org VARCHAR(255),
    profile VARCHAR(255),
    description TEXT,
    intake INT,
    min_grade DOUBLE
);

-- Placement Filter Table
CREATE TABLE placememt_filter (
    id BIGINT PRIMARY KEY,
    place_id BIGINT,
    specialisation BIGINT,
    domain BIGINT
);

-- Placement Student Table
CREATE TABLE placement_student (
    id BIGINT PRIMARY KEY,
    place_id BIGINT,
    sid BIGINT,
    cv_app VARCHAR(255),
    about TEXT,
    acceptance VARCHAR(255),
    comments TEXT,
    date DATE
);

-- Specialisation Table
CREATE TABLE specialisation (
    id BIGINT PRIMARY KEY,
    code VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    credits_req DOUBLE,
    year VARCHAR(255)
);

-- Students Table
CREATE TABLE students (
    id BIGINT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    rollno VARCHAR(255) UNIQUE NOT NULL,
    cgpa INT,
    graduation_year INT,
    total_credits DOUBLE,
    org VARCHAR(255),
    domain BIGINT,
    specialisation BIGINT,
    place_id BIGINT,
    photo_path VARCHAR(255)
);
