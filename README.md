# CopyWriter Frontend

A modern React frontend application for copywriting and content management, built with Vite and Axios.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# In another terminal, start mock API server
npm run mock-api
```

### Environment Setup
Create a `.env.local` file for API configuration:

```bash
# For mock APIs (default - no file needed)
# VITE_API_BASE_URL=http://localhost:3001

# For real APIs (when ready)
# VITE_API_BASE_URL=https://your-api-domain.com/api
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start React development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run mock-api` - Start mock API server

### Mock API Setup
This project includes a comprehensive mock API setup for development:

- **JSON Server** - Provides realistic REST API endpoints
- **Axios Integration** - Clean, simple API functions
- **Environment Variables** - Easy switching between mock/real APIs
- **Authentication Ready** - Built-in token handling

See `public/mock-api/README.md` for detailed documentation.

## 📁 Project Structure

```
src/
├── components/          # React components
│   └── ApiExample.jsx  # API usage examples
├── services/           # API services
│   └── api.js         # Axios API functions
├── App.jsx            # Main app component
└── main.jsx           # App entry point

public/
└── mock-api/          # Mock API data and config
    ├── db.json        # Sample data
    ├── routes.json    # API route mapping
    └── README.md      # Mock API documentation
```

## 🔧 API Usage

### Import API Functions
```javascript
import { 
  fetchUsers, 
  createUser, 
  updateUser, 
  deleteUser,
  fetchContent,
  fetchContentTypes 
} from './services/api';
```

### Use in Components
```javascript
// Fetch data
const response = await fetchUsers();
const users = response.data;

// Create new item
const newUserResponse = await createUser(userData);
const newUser = newUserResponse.data;
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
Set `VITE_API_BASE_URL` to your production API endpoint:

```bash
VITE_API_BASE_URL=https://your-production-api.com/api
```

## 📚 Documentation

- **Mock API Setup**: `public/mock-api/README.md`
- **API Functions**: `src/services/api.js`
- **Component Examples**: `src/components/ApiExample.jsx`

## 🔄 Migration to Real APIs

When your backend APIs are ready:

1. Set `VITE_API_BASE_URL` environment variable
2. Update authentication token handling if needed
3. Remove `public/mock-api/` directory
4. Remove `json-server` dependency

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **JSON Server** - Mock API server
- **ESLint** - Code linting

## 📝 License

This project is private and proprietary.
