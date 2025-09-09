import { useState } from 'react'
import ApiExample from '../components/ApiExample'

function HomePage() {
  const [showApiExample, setShowApiExample] = useState(false)

  return (
    <div className="min-vh-100 bg-light">
      {/* Demo Section */}
      <section id="demo" className="py-5 bg-white h-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-primary text-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="card-title mb-0">
                      <i className="bi bi-code-slash me-2"></i>
                      API Demo & Testing
                    </h4>
                    <span className="badge bg-warning text-dark">Development</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p className="card-text mb-4">
                    This demonstrates the mock API functionality. Make sure to run{' '}
                    <code className="bg-light px-2 py-1 rounded">npm run mock-api</code> in a separate terminal.
                  </p>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-primary"
                      onClick={() => setShowApiExample(!showApiExample)}
                    >
                      <i className={`bi ${showApiExample ? 'bi-eye-slash' : 'bi-eye'} me-2`}></i>
                      {showApiExample ? 'Hide' : 'Show'} API Examples
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="bi bi-book me-2"></i>
                      Documentation
                    </button>
                  </div>
                </div>
              </div>
              
              {showApiExample && <ApiExample />}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
