import React, { useState } from 'react';

function Admin() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Kirubash', email: 'kirubash@example.com', status: 'Active' },
    { id: 2, name: 'Ananth', email: 'ananth@example.com', status: 'Active' },
    { id: 3, name: 'Anand', email: 'anand@example.com', status: 'Active' },
    { id: 4, name: 'Ganpathi', email: 'ganpathi@example.com', status: 'Active' }
  ]);
  const toggleUserStatus = (id) => {
    setUsers(prev => prev.map(user => 
      user.id === id 
        ? {...user, status: user.status === 'Active' ? 'Blocked' : 'Active'}
        : user
    ));
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== id));
    }
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      
      <div className="card">
        <h2>User Management</h2>
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{backgroundColor: '#f5f5f5'}}>
                <th style={{padding: '10px', border: '1px solid #ddd'}}>ID</th>
                <th style={{padding: '10px', border: '1px solid #ddd'}}>Name</th>
                <th style={{padding: '10px', border: '1px solid #ddd'}}>Email</th>
                <th style={{padding: '10px', border: '1px solid #ddd'}}>Status</th>
                <th style={{padding: '10px', border: '1px solid #ddd'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>{user.id}</td>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>{user.name}</td>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>{user.email}</td>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>
                    <span style={{
                      color: user.status === 'Active' ? 'green' : 'red',
                      fontWeight: 'bold'
                    }}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => toggleUserStatus(user.id)}
                      style={{marginRight: '5px'}}
                    >
                      {user.status === 'Active' ? 'Block' : 'Unblock'}
                    </button>
                    <button 
                      className="btn" 
                      onClick={() => deleteUser(user.id)}
                      style={{backgroundColor: '#dc3545'}}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;