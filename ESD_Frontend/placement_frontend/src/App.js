import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import StudentList from "./components/StudentList";

// Component to protect routes that require authentication
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("user"); // Check if token exists
  return token ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Route for Student List */}
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <StudentList />
            </PrivateRoute>
          }
        />
        
        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
