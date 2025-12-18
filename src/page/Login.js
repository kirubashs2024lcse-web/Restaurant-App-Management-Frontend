import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      alert('Login successful!');
      navigate('/items');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{maxWidth: '400px', margin: '50px auto'}}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={credentials.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={credentials.password}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit" className="btn" style={{width: '100%'}}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;