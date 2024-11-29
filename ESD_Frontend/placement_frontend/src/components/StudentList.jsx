import React from 'react';
import { useStudentList } from '../hooks/useStudents';
import { studentListStyles } from '../styles/studentListStyles';

function StudentList() {
  const {
    students,
    filteredStudents,
    error,
    filterKeyword,
    setFilterKeyword,
    fetchFilteredStudents
  } = useStudentList();

  return (
    <div style={studentListStyles.backgroundContainer}>
      <div style={studentListStyles.overlay}>
        <div style={studentListStyles.container}>
          <h1 style={studentListStyles.heading}>IIITB Placement History</h1>

          {error !== "" && (
            <div style={studentListStyles.errorMessage}>{error}</div>
          )}

          <div style={studentListStyles.filterContainer}>
            <input
              type="text"
              placeholder="Enter keyword to filter"
              value={filterKeyword}
              onChange={(e) => setFilterKeyword(e.target.value)}
              style={studentListStyles.filterInput}
            />
            <button onClick={fetchFilteredStudents} style={studentListStyles.filterButton}>
              Filter
            </button>
          </div>

          {students.length > 0 && filteredStudents.length === 0 ? (
            <div>
              <h2 style={studentListStyles.subHeading}>All Students</h2>
              <table style={studentListStyles.table}>
                <thead style={studentListStyles.tableHeader}>
                  <tr>
                    <th style={studentListStyles.tableHeaderCell}>First Name</th>
                    <th style={studentListStyles.tableHeaderCell}>Last Name</th>
                    <th style={studentListStyles.tableHeaderCell}>Email</th>
                    <th style={studentListStyles.tableHeaderCell}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} style={studentListStyles.tableRow}>
                      <td style={studentListStyles.tableCell}>{student[1]}</td>
                      <td style={studentListStyles.tableCell}>{student[2]}</td>
                      <td style={studentListStyles.tableCell}>{student[3]}</td>
                      <td style={studentListStyles.tableCell}>{student[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          {filteredStudents.length > 0 && (
            <div>
              <h2 style={studentListStyles.subHeading}>Filtered Students</h2>
              <table style={studentListStyles.table}>
                <thead style={studentListStyles.tableHeader}>
                  <tr>
                    <th style={studentListStyles.tableHeaderCell}>First Name</th>
                    <th style={studentListStyles.tableHeaderCell}>Last Name</th>
                    <th style={studentListStyles.tableHeaderCell}>Program</th>
                    <th style={studentListStyles.tableHeaderCell}>Student Organization</th>
                    <th style={studentListStyles.tableHeaderCell}>Alumni Organization</th>
                    <th style={studentListStyles.tableHeaderCell}>Graduation Year</th>
                    <th style={studentListStyles.tableHeaderCell}>Is Alumni</th>
                    <th style={studentListStyles.tableHeaderCell}>Placement Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index} style={studentListStyles.tableRow}>
                      <td style={studentListStyles.tableCell}>{student[0]}</td>
                      <td style={studentListStyles.tableCell}>{student[1]}</td>
                      <td style={studentListStyles.tableCell}>{student[2]}</td>
                      <td style={studentListStyles.tableCell}>{student[3]}</td>
                      <td style={studentListStyles.tableCell}>{student[4]}</td>
                      <td style={studentListStyles.tableCell}>{student[5]}</td>
                      <td style={studentListStyles.tableCell}>{student[6]}</td>
                      <td style={studentListStyles.tableCell}>{student[7]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {filteredStudents.length === 0 && students.length === 0 && (
            <div style={studentListStyles.noDataMessage}>No students found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentList;
