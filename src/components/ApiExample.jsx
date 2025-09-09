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
    <div className="mt-4">
      {/* Error Alert */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          <strong>Error:</strong> {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setError(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="card mb-4">
        <div className="card-header">
          <h5 className="card-title mb-0">
            <i className="bi bi-gear me-2"></i>
            API Actions
          </h5>
        </div>
        <div className="card-body">
          <div className="d-flex flex-wrap gap-2">
            <button 
              className="btn btn-primary"
              onClick={loadUsers} 
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Loading...
                </>
              ) : (
                <>
                  <i className="bi bi-download me-2"></i>
                  Fetch Users
                </>
              )}
            </button>
            <button 
              className="btn btn-success"
              onClick={handleCreateUser} 
              disabled={loading}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Create Test User
            </button>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <i className="bi bi-people me-2"></i>
            Users ({users.length})
          </h5>
          <span className="badge bg-primary">{users.length} total</span>
        </div>
        <div className="card-body p-0">
          {users.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                            <i className="bi bi-person text-primary"></i>
                          </div>
                          <div>
                            <div className="fw-semibold">{user.name}</div>
                            <small className="text-muted">ID: {user.id}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-muted">{user.email}</span>
                      </td>
                      <td>
                        <span className={`badge ${user.role === 'admin' ? 'bg-danger' : user.role === 'writer' ? 'bg-primary' : 'bg-secondary'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${user.isActive ? 'bg-success' : 'bg-secondary'}`}>
                          <i className={`bi ${user.isActive ? 'bi-check-circle' : 'bi-x-circle'} me-1`}></i>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          <button 
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => handleUpdateUser(user.id)}
                            disabled={loading}
                            title="Update User"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button 
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDeleteUser(user.id)}
                            disabled={loading}
                            title="Delete User"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-1 text-muted"></i>
              <h5 className="mt-3 text-muted">No users found</h5>
              <p className="text-muted">Click "Fetch Users" to load data from the API</p>
            </div>
          )}
        </div>
      </div>

      {/* Info Alert */}
      <div className="alert alert-info mt-4" role="alert">
        <i className="bi bi-info-circle me-2"></i>
        <strong>Note:</strong> Make sure to run <code className="bg-light px-2 py-1 rounded">npm run mock-api</code> in a separate terminal to start the mock API server on port 3001.
      </div>
    </div>
  );
}

export default ApiExample;
