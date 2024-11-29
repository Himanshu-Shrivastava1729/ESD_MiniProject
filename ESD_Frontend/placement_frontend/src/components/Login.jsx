import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/styles';  // Correct import for the styles

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, success } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div style={styles.backgroundContainer}> {/* Updated background container */}
      <div style={styles.overlay}> {/* Overlay added for blur effect */}
        <div style={styles.container}> {/* Center the form */}
          <form onSubmit={handleLogin} style={styles.form}>
            <h2 style={styles.heading}>Login</h2>

            {error && (
              <div style={styles.errorMessage}>
                {error}
              </div>
            )}

            {success && (
              <div style={styles.successMessage}>
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
    </div>
  );
}

export default Login;
