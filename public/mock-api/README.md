# Mock API Documentation

## Overview
This directory contains mock API data and configuration for the CopyWriter frontend application. The mock APIs are implemented using JSON Server and provide a realistic API experience during development.

## ⚠️ IMPORTANT: This is a temporary solution
**This entire mock API setup will be removed when real backend APIs are implemented.**

## File Structure
```
public/mock-api/
├── README.md           # This documentation file
├── db.json            # Mock data for all endpoints
├── routes.json        # API route mapping configuration
└── (this folder)      # Entire folder to be deleted when real APIs are ready
```

## How It Works

### 1. JSON Server
- Runs on port 3001 (separate from React dev server)
- Serves REST API endpoints based on `db.json` data
- Supports full CRUD operations (GET, POST, PUT, DELETE)
- Provides query parameters, filtering, and pagination

### 2. Direct API Calls
- React app runs on port 3000
- Frontend makes direct calls to `http://localhost:3001`
- No proxy needed - simple and straightforward

### 3. Simple API Service with Axios
- Frontend uses `src/services/api.js` for all API calls
- **Direct function exports** - Clean, simple functions for each endpoint
- Uses Axios with environment variable configuration
- Automatic JSON parsing, error handling, and authentication
- Easy to switch to real APIs by changing environment variable

### 4. API Function Structure
The API service exports direct functions for each endpoint:

```javascript
import { 
  fetchUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  fetchContent,
  fetchContentTypes,
  fetchTemplates 
} from '../services/api';

// Usage examples:
const response = await fetchUsers();
const users = response.data;

const newUserResponse = await createUser(userData);
const newUser = newUserResponse.data;

const contentResponse = await fetchContent();
const content = contentResponse.data;
```

## Running the Mock API

```bash
# Terminal 1: Start React dev server
npm run dev

# Terminal 2: Start mock API server
npm run mock-api
```

## Environment Variables

The API service uses environment variables for configuration:

### For Mock APIs (Default)
```bash
# .env.local (optional - defaults to localhost:3001)
VITE_API_BASE_URL=http://localhost:3001
```

### For Real APIs
```bash
# .env.local
VITE_API_BASE_URL=https://your-api-domain.com/api
```

### How it Works
- If `VITE_API_BASE_URL` is not set, it defaults to `http://localhost:3001` (mock API)
- If `VITE_API_BASE_URL` is set, it uses that URL for API calls
- Easy to switch between mock and real APIs by changing one environment variable

## Query Parameters
JSON Server supports various query parameters:

- `_limit=10` - Limit number of results
- `_page=2` - Pagination
- `_sort=name` - Sort by field
- `_order=desc` - Sort order (asc/desc)
- `q=search` - Full-text search
- `field=value` - Filter by field value

### Examples
```
GET http://localhost:3001/users?_limit=5&_sort=name&_order=asc
GET http://localhost:3001/content?status=published&_limit=10
GET http://localhost:3001/content?q=copywriting&_sort=createdAt&_order=desc
```

## Adding New APIs

### Step 1: Add Data to db.json
Add your new data structure to `public/mock-api/db.json`:

```json
{
  "users": [...],
  "content": [...],
  "yourNewModule": [
    {
      "id": 1,
      "name": "Example Item",
      "description": "This is an example",
      "createdAt": "2024-01-20T10:00:00Z"
    }
  ]
}
```

### Step 2: Add Routes to routes.json
Add your API routes to `public/mock-api/routes.json`:

```json
{
  "/api/users": "/users",
  "/api/yourNewModule": "/yourNewModule",
  "/api/yourNewModule/:id": "/yourNewModule/:id"
}
```

### Step 3: Add Functions to src/services/api.js
Add your API functions as direct exports in `src/services/api.js`:

```javascript
// Your New Module API functions
export const fetchYourNewModule = () => api.get('/yourNewModule');
export const fetchYourNewModuleById = (id) => api.get(`/yourNewModule/${id}`);
export const createYourNewModule = (itemData) => api.post('/yourNewModule', itemData);
export const updateYourNewModule = (id, itemData) => api.put(`/yourNewModule/${id}`, itemData);
export const deleteYourNewModule = (id) => api.delete(`/yourNewModule/${id}`);
```

### Step 4: Use in Components
Import and use your new API functions:

```javascript
import { 
  fetchYourNewModule, 
  createYourNewModule 
} from '../services/api';

// In your component
const response = await fetchYourNewModule();
const items = response.data;

const newItemResponse = await createYourNewModule({ name: 'New Item' });
const newItem = newItemResponse.data;
```

## Why routes.json Exists

The `routes.json` file maps your frontend API calls to JSON Server endpoints:

### Without routes.json:
- JSON Server creates endpoints based on `db.json` keys
- Your data: `"users": [...]` → Endpoint: `http://localhost:3001/users`
- Your data: `"contentTypes": [...]` → Endpoint: `http://localhost:3001/contentTypes`

### With routes.json:
- You can customize endpoint URLs
- Map `/api/users` → `/users` (cleaner URLs)
- Map `/api/content-types` → `/contentTypes` (handle naming differences)
- Create custom API structure that matches your real API design

### Example routes.json:
```json
{
  "/api/users": "/users",
  "/api/content-types": "/contentTypes",
  "/api/content": "/content",
  "/api/templates": "/templates",
  "/api/analytics": "/analytics"
}
```

This allows your frontend to call `/api/users` but JSON Server serves `/users` data.

## Axios Benefits

The API service uses Axios instead of fetch for several advantages:

### 1. **Automatic JSON Handling**
- No need to call `JSON.stringify()` or `.json()`
- Axios automatically serializes/deserializes JSON

### 2. **Request/Response Interceptors**
- **Request Interceptor**: Add auth tokens, logging, etc.
- **Response Interceptor**: Handle common errors, logging, etc.

### 3. **Better Error Handling**
- Automatic error categorization (network, server, request errors)
- Consistent error messages across the app

### 4. **Built-in Features**
- Request timeout (10 seconds)
- Automatic retries (can be configured)
- Request/response transformation
- Request cancellation

### 5. **Easy Authentication**
```javascript
// In request interceptor (already set up)
const token = localStorage.getItem('authToken');
if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
```

## Data Structure
The `db.json` file contains sample data for:
- **Users**: User accounts and profiles
- **Content Types**: Different types of content (blog, social, email, etc.)
- **Content**: Actual content pieces with metadata
- **Templates**: Reusable content templates
- **Analytics**: Performance metrics and statistics

## Development Notes
- Data is stored in memory and resets when server restarts
- All timestamps are in ISO format
- IDs are auto-generated by JSON Server
- Relationships between data are maintained through ID references

## Troubleshooting

### Port Already in Use
If port 3001 is already in use:
```bash
# Kill process using port 3001
npx kill-port 3001

# Or use a different port
npx json-server public/mock-api/db.json --port 3002
```

### CORS Issues
If you encounter CORS issues:
1. Ensure JSON Server is running on port 3001
2. Check that you're making requests to the correct endpoints
3. Verify the API service is using the correct BASE_URL

## 🔄 Migration to Real APIs

When your backend APIs are ready, follow these simple steps:

### Step 1: Update Environment Variable
Create or update your `.env.local` file:

```bash
# .env.local
VITE_API_BASE_URL=https://your-production-api.com/api
```

### Step 2: Test Real API Integration
1. Start your real backend server
2. Update the environment variable
3. Test all API calls in your application
4. Verify authentication works correctly

### Step 3: Clean Up Mock API Files
Once everything works with real APIs:

```bash
# Delete mock API directory
rm -rf public/mock-api/

# Remove JSON Server dependency
npm uninstall json-server

# Remove mock API script from package.json
# (remove "mock-api" script)
```

### Step 4: Update Authentication (if needed)
If your real API uses different authentication:

1. Update the token key in `src/services/api.js`:
   ```javascript
   const token = localStorage.getItem('your-token-key');
   ```

2. Update token storage logic in your login components

### Step 5: Production Deployment
- Set `VITE_API_BASE_URL` in your production environment
- Ensure CORS is configured on your backend
- Test all functionality in production

## ⚠️ Important Notes

- **No code changes needed** - Just change the environment variable
- **Authentication ready** - Token handling is already configured
- **Error handling** - Axios provides robust error handling
- **CORS support** - `withCredentials: true` is already set

## Support
For questions about the mock API setup, refer to:
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [React API Integration Best Practices](https://react.dev/learn/synchronizing-with-effects#fetching-data)

---

**Remember: This is a temporary development tool. Plan for its removal when real APIs are implemented.**
