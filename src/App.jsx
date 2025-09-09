import { useState } from 'react'
import './App.css'
import ApiExample from './components/ApiExample'

function App() {
  const [showApiExample, setShowApiExample] = useState(false)

  return (
    <>
      {/* ========================================
          MOCK API DEMONSTRATION
          ========================================
          This section demonstrates the mock API functionality
          You can remove this section when building your actual features
          ======================================== */}
      <div className="card" style={{ marginTop: '20px' }}>
        <h3>Mock API Demo</h3>
        <p>
          This demonstrates the mock API setup. Make sure to run{' '}
          <code>npm run mock-api</code> in a separate terminal.
        </p>
        <button 
          onClick={() => setShowApiExample(!showApiExample)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#646cff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {showApiExample ? 'Hide' : 'Show'} API Examples
        </button>
      </div>
      
      {showApiExample && <ApiExample />}
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
