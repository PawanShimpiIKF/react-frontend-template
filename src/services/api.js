import axios from 'axios';

// ========================================
// AXIOS CONFIGURATION
// ========================================
// CURRENT SETUP: Mock APIs via JSON Server on port 3001
// - Uses VITE_API_BASE_URL environment variable
// - Defaults to http://localhost:3001 for mock APIs
// - Easy to switch to real APIs by changing environment variable
//
// WHEN REAL APIs ARE READY:
// 1. Set VITE_API_BASE_URL to your real API endpoint
// 2. Remove this comment block
// ========================================

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for CORS with credentials
});

// Add a request interceptor to add auth token if it exists
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// ========================================
// API FUNCTIONS
// ========================================
// Direct axios calls for each endpoint
// Simple, clean, and easy to understand
// ========================================

// User API functions
export const fetchUsers = () => api.get('/users');
export const fetchUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Content API functions
export const fetchContent = () => api.get('/content');
export const fetchContentById = (id) => api.get(`/content/${id}`);
export const createContent = (contentData) => api.post('/content', contentData);
export const updateContent = (id, contentData) => api.put(`/content/${id}`, contentData);
export const deleteContent = (id) => api.delete(`/content/${id}`);

// Content Type API functions
export const fetchContentTypes = () => api.get('/contentTypes');
export const fetchContentTypeById = (id) => api.get(`/contentTypes/${id}`);
export const createContentType = (typeData) => api.post('/contentTypes', typeData);
export const updateContentType = (id, typeData) => api.put(`/contentTypes/${id}`, typeData);
export const deleteContentType = (id) => api.delete(`/contentTypes/${id}`);

// Template API functions
export const fetchTemplates = () => api.get('/templates');
export const fetchTemplateById = (id) => api.get(`/templates/${id}`);
export const createTemplate = (templateData) => api.post('/templates', templateData);
export const updateTemplate = (id, templateData) => api.put(`/templates/${id}`, templateData);
export const deleteTemplate = (id) => api.delete(`/templates/${id}`);

// Analytics API functions
export const fetchAnalytics = () => api.get('/analytics');
export const fetchAnalyticsById = (id) => api.get(`/analytics/${id}`);
export const createAnalytics = (analyticsData) => api.post('/analytics', analyticsData);
export const updateAnalytics = (id, analyticsData) => api.put(`/analytics/${id}`, analyticsData);
export const deleteAnalytics = (id) => api.delete(`/analytics/${id}`);

// ========================================
// MIGRATION TO REAL APIs
// ========================================
// When switching to real APIs:
// 1. Change BASE_URL to your real API endpoint
// 2. Uncomment and update authentication in request interceptor
// 3. Update error handling in response interceptor if needed
// 4. Update timeout value if needed
// 5. Remove this comment block
// ========================================
