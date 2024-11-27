import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [filterKeyword, setFilterKeyword] = useState(""); // State for filter input
  const [filteredStudents, setFilteredStudents] = useState([]); // State to store filtered students
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  // Function to fetch all students
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.get("http://localhost:8080/student/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStudents(response.data); // Update state with all student data
    } catch (err) {
      console.error("Error fetching students:", err);
      setError(err.response?.data?.message || "Failed to fetch students.");
      if (err.response?.status === 401 || err.message.includes("Unauthorized")) {
        navigate("/login"); // Redirect to login if unauthorized
      }
    }
  };

  // Function to fetch filtered students based on keyword
  const fetchFilteredStudents = async () => {
    try {
      const token = localStorage.getItem("user");
      if (!token) {
        throw new Error("Unauthorized: No token found");
      }

      const response = await axios.get(
        `http://localhost:8080/student/${filterKeyword}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFilteredStudents(response.data);
      setError("") // Update state with filtered student data
    } catch (err) {
      console.error("Error fetching filtered students:", err);
      setError(err.response?.data?.message || "Failed to fetch filtered students.");
      if (err.response?.status === 401 || err.message.includes("Unauthorized")) {
        navigate("/login"); // Redirect to login if unauthorized
      }
    }
  };

  return (
    <div>
      <h1>Student List</h1>

      {error !==""&& <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

      {/* Filter Input Box and Button */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter keyword to filter"
          value={filterKeyword}
          onChange={(e) => setFilterKeyword(e.target.value)} // Update state with input value
          style={{ marginRight: "10px" }}
        />
        <button onClick={fetchFilteredStudents}>Filter</button>
      </div>

      {/* Table for All Students */}
      {students.length > 0 && filteredStudents.length === 0 ? (
        <div>
          <h2>All Students</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student[1]}</td> {/* First Name */}
                  <td>{student[2]}</td> {/* Last Name */}
                  <td>{student[3]}</td> {/* Email */}
                  <td>{student[4]}</td> {/* Status */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {/* Table for Filtered Students */}
      {filteredStudents.length > 0 && (
        <div>
          <h2>Filtered Students</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Program</th>
                <th>Student Organization</th>
                <th>Alumni Organization</th>
                <th>Graduation Year</th>
                <th>Is Alumni</th>
                <th>Placement Status</th>
                
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student[0]}</td> {/* First Name */}
                  <td>{student[1]}</td> {/* Last Name */}
                  <td>{student[2]}</td> {/* Program */}
                  <td>{student[3]}</td> {/* Organization */}
                  <td>{student[4]}</td> {/* Alumni Status */}
                  <td>{student[5]}</td> {/* Placement Status */}
                  <td>{student[6]}</td> {/* Graduation Year */}
                  <td>{student[7]}</td> {/* Graduation Year */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredStudents.length === 0 && students.length === 0 && (
        <div>No students found.</div>
      )}
    </div>
  );
}

export default StudentList;
