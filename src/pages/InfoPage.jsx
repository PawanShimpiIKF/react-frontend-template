function InfoPage() {
  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-info text-white">
                <h4 className="card-title mb-0">
                  <i className="bi bi-info-circle me-2"></i>
                  Information Page
                </h4>
              </div>
              <div className="card-body p-4">
                <h5 className="card-title text-primary mb-3">About Frontend Template</h5>
                <p className="card-text mb-4">
                  This is a React-based frontend application built with Vite for fast development and hot module replacement.
                  The project includes modern web development practices and tools.
                </p>
                
                <h6 className="text-primary mb-3">Features</h6>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    React 19 with modern hooks
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Vite for fast development
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Bootstrap 5 for responsive design
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Bootstrap Icons for UI elements
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    SCSS for custom styling
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Mock API with JSON Server
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    React Router for navigation
                  </li>
                </ul>

                <h6 className="text-primary mb-3">Getting Started</h6>
                <div className="bg-light p-3 rounded mb-3">
                  <code className="text-dark">
                    npm install<br/>
                    npm run dev
                  </code>
                </div>

                <h6 className="text-primary mb-3">Available Scripts</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded me-2">npm run dev</code>
                    Start development server
                  </li>
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded me-2">npm run build</code>
                    Build for production
                  </li>
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded me-2">npm run mock-api</code>
                    Start mock API server
                  </li>
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded me-2">npm run scss</code>
                    Watch SCSS files for changes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
