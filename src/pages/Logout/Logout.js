import React from 'react';
import './Logout.css';
import { Link, useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
    
  return (
    <div className="logout-container">
      <button className="logout-button" onClick={onLogout}>
        Logout successful. if you want Login  <Link to='/login' style={{ color: 'blue', cursor: 'pointer' }}>Click here</Link>
      </button>
    </div>
  );
}

export default Logout;
