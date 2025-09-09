import { useState } from 'react'
import ApiExample from './components/ApiExample'

function App() {
  const [showApiExample, setShowApiExample] = useState(false)

  return (
    <div className="container-fluid">
      {/* ========================================
          MOCK API DEMONSTRATION
          ========================================
          This section demonstrates the mock API functionality
          You can remove this section when building your actual features
          ======================================== */}
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Mock API Demo</h3>
          <p className="card-text">
            This demonstrates the mock API setup. Make sure to run{' '}
            <code>npm run mock-api</code> in a separate terminal.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => setShowApiExample(!showApiExample)}
          >
            {showApiExample ? 'Hide' : 'Show'} API Examples
          </button>
        </div>
      </div>
      
      {showApiExample && <ApiExample />}
      
      <p className="text-muted mt-3">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
