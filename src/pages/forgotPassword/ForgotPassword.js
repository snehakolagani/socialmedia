import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotPassword.css'; // Assuming the CSS file is already created

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSend = () => {
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Simulate sending email logic (can replace with real API call)
    setTimeout(() => {
      setMessage('Password reset instructions have been sent to your email.');
      setEmail('');

      // Redirect to the Login screen after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address to receive password reset instructions.</p>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        className="auth-input"
      />
      <button onClick={handleSend} className="auth-button">
        Send
      </button>
      <p className="auth-message">{message}</p>
    </div>
  );
};

export default ForgotPassword;
