import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    let token;

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      token = response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login. Please try again.');
      return;
    }

    localStorage.setItem('user', token);
    setSuccess('Login successful!');
    navigate('/students');
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}>
        <form onSubmit={handleLogin} style={styles.form}>
          <h2 style={styles.title}>Login</h2>
          
          {error && (
            <div style={styles.error}>
              {error}
            </div>
          )}
          
          {success && (
            <div style={styles.success}>
              {success}
            </div>
          )}
          
          <div style={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundImage: 'url("https://thesamikhsya.com/wp-content/uploads/2024/09/IIITB1.jpg")', // Placeholder image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  backgroundOverlay: {
    backgroundColor: 'rgba(230, 242, 255, 0.8)', // Transparent light blue overlay
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 123, 255, 0.15)', // Blue-tinted shadow
    width: '350px',
    textAlign: 'center',
    border: '1px solid #007bff', // Blue border
    position: 'relative',
    zIndex: 10,
  },
  title: {
    color: '#007bff', // Blue title
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #007bff', // Blue border
    outline: 'none',
    transition: 'border-color 0.3s ease',
    backgroundColor: '#f0f8ff', // Very light blue input background
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff', // Vibrant blue button
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.1s ease',
    '&:hover': {
      backgroundColor: '#0056b3', // Darker blue on hover
      transform: 'scale(1.02)', // Slight scale effect on hover
    },
  },
  error: {
    color: '#dc3545', // Bootstrap-like error red
    backgroundColor: 'rgba(220, 53, 69, 0.1)', // Transparent light red background
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '15px',
  },
  success: {
    color: '#28a745', // Bootstrap-like success green
    backgroundColor: 'rgba(40, 167, 69, 0.1)', // Transparent light green background
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '15px',
  },
};

export default Login;