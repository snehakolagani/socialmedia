import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { username, password } = formData;

    if (!username || !password) {
      setMessage('Both fields are required!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        setMessage('Login successful!');
        navigate('/profile');
      } else {
        setMessage('Invalid username or password!');
      }
    } catch (error) {
      setMessage('Error connecting to the server!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="auth-input"
      />
      <button onClick={handleLogin} className="auth-button">
        Login
      </button>
      <p className="auth-message">{message}</p>
    </div>
  );
};

export default Login;
