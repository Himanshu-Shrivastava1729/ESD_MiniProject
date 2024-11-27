import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

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
      setStudents(response.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      setError(err.response?.data?.message || "Failed to fetch students.");
      if (err.response?.status === 401 || err.message.includes("Unauthorized")) {
        navigate("/login");
      }
    }
  };

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
      setError("");
    } catch (err) {
      console.error("Error fetching filtered students:", err);
      setError(err.response?.data?.message || "Failed to fetch filtered students.");
      if (err.response?.status === 401 || err.message.includes("Unauthorized")) {
        navigate("/login");
      }
    }
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.heading}>IIITB Placement History</h1>

          {error !== "" && (
            <div style={styles.errorMessage}>{error}</div>
          )}

          <div style={styles.filterContainer}>
            <input
              type="text"
              placeholder="Enter keyword to filter"
              value={filterKeyword}
              onChange={(e) => setFilterKeyword(e.target.value)}
              style={styles.filterInput}
            />
            <button onClick={fetchFilteredStudents} style={styles.filterButton}>
              Filter
            </button>
          </div>

          {students.length > 0 && filteredStudents.length === 0 ? (
            <div>
              <h2 style={styles.subHeading}>All Students</h2>
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th style={styles.tableHeaderCell}>First Name</th>
                    <th style={styles.tableHeaderCell}>Last Name</th>
                    <th style={styles.tableHeaderCell}>Email</th>
                    <th style={styles.tableHeaderCell}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} style={styles.tableRow}>
                      <td style={styles.tableCell}>{student[1]}</td>
                      <td style={styles.tableCell}>{student[2]}</td>
                      <td style={styles.tableCell}>{student[3]}</td>
                      <td style={styles.tableCell}>{student[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {filteredStudents.length > 0 && (
            <div>
              <h2 style={styles.subHeading}>Filtered Students</h2>
              <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th style={styles.tableHeaderCell}>First Name</th>
                    <th style={styles.tableHeaderCell}>Last Name</th>
                    <th style={styles.tableHeaderCell}>Program</th>
                    <th style={styles.tableHeaderCell}>Student Organization</th>
                    <th style={styles.tableHeaderCell}>Alumni Organization</th>
                    <th style={styles.tableHeaderCell}>Graduation Year</th>
                    <th style={styles.tableHeaderCell}>Is Alumni</th>
                    <th style={styles.tableHeaderCell}>Placement Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index} style={styles.tableRow}>
                      <td style={styles.tableCell}>{student[0]}</td>
                      <td style={styles.tableCell}>{student[1]}</td>
                      <td style={styles.tableCell}>{student[2]}</td>
                      <td style={styles.tableCell}>{student[3]}</td>
                      <td style={styles.tableCell}>{student[4]}</td>
                      <td style={styles.tableCell}>{student[5]}</td>
                      <td style={styles.tableCell}>{student[6]}</td>
                      <td style={styles.tableCell}>{student[7]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredStudents.length === 0 && students.length === 0 && (
            <div style={styles.noDataMessage}>No students found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styled object for consistent styling
const styles = {
  backgroundContainer: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/IIIT_Bangalore_Logo.svg/1200px-IIIT_Bangalore_Logo.svg.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Soft white overlay
    backdropFilter: 'blur(5px)', // Slight blur effect
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    zIndex: 10,
  },
  heading: {
    color: '#1A5F7A', // Deep teal color
    textAlign: 'center',
    borderBottom: '3px solid #1A5F7A',
    paddingBottom: '15px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  subHeading: {
    color: '#1A5F7A',
    marginTop: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #1A5F7A',
    paddingBottom: '10px',
  },
  errorMessage: {
    color: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    border: '1px solid red',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    textAlign: 'center',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  filterInput: {
    padding: '10px',
    marginRight: '10px',
    width: '300px',
    border: '1px solid #1A5F7A',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: '#1A5F7A',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  tableHeader: {
    backgroundColor: '#1A5F7A',
    color: 'white',
  },
  tableHeaderCell: {
    textAlign: 'center',
    padding: '12px',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.2s ease',
  },
  tableCell: {
    textAlign: 'center',
    padding: '10px',
  },
  noDataMessage: {
    textAlign: 'center',
    color: '#666',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
};

export default StudentList;