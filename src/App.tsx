import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import logoImg from '/logo.png'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img src={logoImg} alt="AI Auto Workflow" className="logo-icon" style={{width: '80px', height: '80px'}} />
              <span className="logo-text">AI Auto Workflow</span>
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li>
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setTimeout(() => scrollToSection('features'), 100)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setTimeout(() => scrollToSection('testimonials'), 100)}
              >
                Testimonials
              </Link>
            </li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><button className="nav-cta">Get Started</button></li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logoImg} alt="AI Auto Workflow" className="logo-icon" style={{width: '36px', height: '36px'}} />
                <span className="logo-text">AI Auto Workflow</span>
              </div>
              <p className="footer-description">
                Intelligent automation for modern development teams. 
                Streamline your workflow with AI-powered tools.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li>
                  <Link 
                    to="/" 
                    className="footer-link"
                    onClick={() => setTimeout(() => scrollToSection('features'), 100)}
                  >
                    Features
                  </Link>
                </li>
                <li><a href="#" className="footer-link">Pricing</a></li>
                <li><a href="#" className="footer-link">Documentation</a></li>
                <li><a href="#" className="footer-link">API Reference</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Community</a></li>
                <li><a href="#" className="footer-link">Status</a></li>
                <li><a href="#" className="footer-link">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2024 AI Auto Workflow. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App