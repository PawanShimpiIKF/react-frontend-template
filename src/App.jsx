import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
