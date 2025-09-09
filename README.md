# Frontend Project Template

A modern React frontend application template, built with Vite, Axios, Bootstrap, and SCSS for centralized styling.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start SCSS compilation (in watch mode)
npm run scss

# Start development server (in another terminal)
npm run dev

# Start mock API server (in another terminal)
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
- `npm run scss` - Watch SCSS files and compile to CSS
- `npm run scss:build` - Compile SCSS to compressed CSS for production

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
├── scss/              # SCSS source files
│   ├── custom-bootstrap.scss  # Custom Bootstrap theme
│   └── page-specific-styles.scss  # Page-specific styles
├── css/               # Compiled CSS files (auto-generated)
│   ├── custom-bootstrap.css
│   └── page-specific-styles.css
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

## 🎨 Styling & CSS Architecture

This project uses a **centralized CSS approach** with SCSS and Bootstrap:

### SCSS Compilation
- **Source**: All styles are written in SCSS files in `src/scss/`
- **Compilation**: SCSS files are compiled to CSS in `src/css/`
- **Watch Mode**: `npm run scss` automatically recompiles on changes
- **Production**: `npm run scss:build` creates compressed CSS

### Bootstrap Integration
- **Custom Theme**: `src/scss/custom-bootstrap.scss` contains custom Bootstrap variables
- **Color Palette**: Custom primary colors and gray scale defined
- **Components**: Full Bootstrap component library available
- **JavaScript**: Bootstrap JS functionality included

### Development Workflow
1. **Edit SCSS**: Modify files in `src/scss/`
2. **Auto-compile**: SCSS watch mode compiles to `src/css/`
3. **Import CSS**: Compiled CSS is imported in `main.jsx`
4. **Use Classes**: Apply Bootstrap classes in React components

### Why This Approach?
- **Centralized**: All styles in one place, easy to maintain
- **Customizable**: Full control over Bootstrap theme
- **Performance**: Only necessary CSS is compiled
- **Scalable**: Easy to add new styles and components

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Bootstrap 5** - CSS framework with custom theme
- **SCSS** - CSS preprocessor for styling
- **Axios** - HTTP client
- **JSON Server** - Mock API server
- **ESLint** - Code linting

## 📝 License

This project is private and proprietary.
