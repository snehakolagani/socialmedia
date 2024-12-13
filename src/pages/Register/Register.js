import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkUsernameExists = async (username) => {
    try {
      const response = await fetch(`http://localhost:5000/users?username=${username}`);
      const data = await response.json();
      return data.length > 0; // If the array is not empty, username exists
    } catch (error) {
      setMessage('Error connecting to the server!');
      return false; // Assume username doesn't exist if there's an error
    }
  };

  const handleRegister = async () => {
    const { firstName, username, email, password } = formData;

    if (!firstName || !username || !email || !password) {
      setMessage('All fields are required!');
      return;
    }

    try {
      // Check if the username already exists
      const usernameExists = await checkUsernameExists(username);
      if (usernameExists) {
        alert('Username is already taken. Please choose another one.');
        return;
      }

      // Proceed with registration if username is unique
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setFormData({ firstName: '', username: '', email: '', password: '' });
        navigate('/login');
      } else {
        setMessage('Error during registration!');
      }
    } catch (error) {
      setMessage('Error connecting to the server!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="auth-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
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
      <button onClick={handleRegister} className="auth-button">
        Register
      </button>
      <p className="auth-message">{message}</p>
      <div className="auth-links">
        <Link to="/forgot-password" className="auth-link">
          Forgot Password?
        </Link>
        <Link to="/login" className="auth-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
