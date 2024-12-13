import React, { useState } from 'react';

const AuthComponent = () => {
  // Mock user database
  const fakeUserDB = [];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    // Check if user already exists
    const existingUser = fakeUserDB.find((user) => user.username === username);
    if (existingUser) {
      setMessage('User already exists!');
    } else {
      // Add the user to the fake database
      fakeUserDB.push({ username, password });
      setMessage('Registration successful!');
      console.log(username,password)
    }
  };

  const handleLogin = () => {
    // Validate user credentials
    const user = fakeUserDB.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password!');
    }
  };

  

  return (
    <div>
      
      <div>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>

      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default AuthComponent;
