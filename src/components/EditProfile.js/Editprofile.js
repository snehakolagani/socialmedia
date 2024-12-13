import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({ profileData, onProfileUpdate }) => {
  const [profile, setProfile] = useState(profileData);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(profile);
    setProfile({ name: '', description: '' }); // Clear the fields
    setMessage('Changes saved successfully!'); // Show success message
    setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
  };

  return (
    <div className='edit-profile'>
      <h2>Edit Profile</h2>
      {message && <p className='success-message'>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            value={profile.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
