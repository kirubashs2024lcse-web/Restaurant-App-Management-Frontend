import React, { useState } from 'react';

function About() {
  const [profile, setProfile] = useState({
    name: 'Muniandi Villas',
    email: 'info@muniandivillas.com',
    phone: '+91 9876543210',
    address: '123 Main Street, Chennai, Tamil Nadu',
    description: 'Serving authentic South Indian cuisine since 1995'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="container">
      <h1>About Us</h1>
      
      <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
        <h2>Restaurant Profile</h2>
        
        {isEditing ? (
          <div>
            <div className="form-group">
              <label>Restaurant Name:</label>
              <input name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input name="email" value={profile.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input name="phone" value={profile.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea name="address" value={profile.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea name="description" value={profile.description} onChange={handleChange} />
            </div>
            <button className="btn" onClick={handleSave}>Save</button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>Description:</strong> {profile.description}</p>
            <button className="btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;