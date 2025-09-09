// ========================================
// API USAGE EXAMPLE COMPONENT
// ========================================
// This component demonstrates how to use the API service functions
// It shows examples of different API calls and error handling
// 
// This is a demo component - you can remove it when building your actual features
// ========================================

import { useState, useEffect } from 'react';
import { 
  fetchUsers, 
  createUser, 
  updateUser, 
  deleteUser
} from '../services/api';

function ApiExample() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example: Fetch users on component mount
  useEffect(() => {
    loadUsers();
  }, []);

  // Example: GET request with error handling
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetchUsers();
      setUsers(response.data);
      console.log('Users fetched successfully:', response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Example: POST request (create new user)
  const handleCreateUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const newUser = {
        name: 'Test User',
        email: 'test@example.com',
        role: 'writer',
        isActive: true
      };
      
      const response = await createUser(newUser);
      console.log('User created successfully:', response.data);
      // Refresh users list
      loadUsers();
    } catch (err) {
      console.error('Error creating user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Example: PUT request (update user)
  const handleUpdateUser = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      
      const updatedData = {
        name: 'Updated User Name',
        isActive: false
      };
      
      const response = await updateUser(userId, updatedData);
      console.log('User updated successfully:', response.data);
      // Refresh users list
      loadUsers();
    } catch (err) {
      console.error('Error updating user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Example: DELETE request
  const handleDeleteUser = async (userId) => {
    try {
      setLoading(true);
      setError(null);
      
      await deleteUser(userId);
      console.log('User deleted successfully');
      // Refresh users list
      loadUsers();
    } catch (err) {
      console.error('Error deleting user:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>API Usage Examples</h2>
      
      {error && (
        <div style={{ 
          background: '#ffebee', 
          color: '#c62828', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Error: {error}
        </div>
      )}
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Actions</h3>
        <button 
          onClick={loadUsers} 
          disabled={loading}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          {loading ? 'Loading...' : 'Fetch Users'}
        </button>
        <button 
          onClick={handleCreateUser} 
          disabled={loading}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          Create Test User
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Users ({users.length})</h3>
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
                <strong>{user.name}</strong> - {user.email} ({user.role})
                <br />
                <small>ID: {user.id} | Active: {user.isActive ? 'Yes' : 'No'}</small>
                <br />
                <button 
                  onClick={() => handleUpdateUser(user.id)}
                  style={{ marginRight: '5px', padding: '4px 8px', fontSize: '12px' }}
                >
                  Update
                </button>
                <button 
                  onClick={() => handleDeleteUser(user.id)}
                  style={{ padding: '4px 8px', fontSize: '12px', background: '#ff5722', color: 'white', border: 'none' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found. Click "Fetch Users" to load data.</p>
        )}
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', background: '#f5f5f5', borderRadius: '4px' }}>
        <p><strong>Note:</strong> Make sure to run <code>npm run mock-api</code> in a separate terminal to start the mock API server on port 3001.</p>
      </div>
    </div>
  );
}

export default ApiExample;
