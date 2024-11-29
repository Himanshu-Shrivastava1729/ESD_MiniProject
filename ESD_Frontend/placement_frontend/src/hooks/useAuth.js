import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError('');
    setSuccess('');

    try {
      const token = await authService.login(email, password);
      authService.saveToken(token);
      setSuccess('Login successful!');
      navigate('/students');
    } catch (err) {
      setError(err);
    }
  };

  return { login, error, success };
};