import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ profileData, updateProfile }) => {
  const [formData, setFormData] = useState(profileData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData); // Send updated data to App
    navigate('/profile');
  };


  return (
    <div className="popup">
      <div className="popup-content edit-profile">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
            value={formData.description}
            onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
  
};


export default EditProfile;
