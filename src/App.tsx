import './App.css'

function App() {
  return (
    <>
      <div className="app-header">
        <h1>AI Auto Workflow</h1>
        <p className="subtitle">Intelligent automation for your development workflow</p>
      </div>
      
      <div className="content">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🤖 AI-Powered</h3>
            <p>Leverage artificial intelligence to automate repetitive tasks</p>
          </div>
          
          <div className="feature-card">
            <h3>⚡ Fast Setup</h3>
            <p>Get your automation pipeline running in minutes</p>
          </div>
          
          <div className="feature-card">
            <h3>🔧 Customizable</h3>
            <p>Tailor workflows to your specific development needs</p>
          </div>
        </div>
        
        <div className="cta-section">
          <button className="primary-button">Get Started</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </>
  )
}

export default App
