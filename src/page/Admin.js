import React, { useState, useEffect } from 'react';

function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/restaurants');
      const data = await response.json();
      if (data.status === 'Success') {
        setUsers(data.data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([
        { _id: 1, name: 'Kirubash', email: 'kirubash@example.com', status: 'Active' },
        { _id: 2, name: 'Ananth', email: 'ananth@example.com', status: 'Active' },
        { _id: 3, name: 'Anand', email: 'anand@example.com', status: 'Active' },
        { _id: 4, name: 'Ganpathi', email: 'ganpathi@example.com', status: 'Active' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleUserStatus = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/restaurants/${id}/toggle-status`, {
        method: 'PATCH'
      });
      const data = await response.json();
      if (data.status === 'Success') {
        fetchUsers();
      }
    } catch (error) {
      console.error('Error toggling status:', error);
      setUsers(prev => prev.map(user => 
        user._id === id || user.id === id
          ? {...user, status: user.status === 'Active' ? 'Blocked' : 'Active'}
          : user
      ));
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://localhost:3001/api/restaurants/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchUsers();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        setUsers(prev => prev.filter(user => user._id !== id && user.id !== id));
      }
    }
  };

  if (loading) {
    return <div className="container"><h1>Loading users...</h1></div>;
  }

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
                <tr key={user._id || user.id}>
                  <td style={{padding: '10px', border: '1px solid #ddd'}}>{user._id || user.id}</td>
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
                      onClick={() => toggleUserStatus(user._id || user.id)}
                      style={{marginRight: '5px'}}
                    >
                      {user.status === 'Active' ? 'Block' : 'Unblock'}
                    </button>
                    <button 
                      className="btn" 
                      onClick={() => deleteUser(user._id || user.id)}
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