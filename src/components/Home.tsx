function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Automate Your Development Workflow with 
              <span className="gradient-text"> AI Intelligence</span>
            </h1>
            <p className="hero-subtitle">
              Transform repetitive tasks into intelligent automation. Boost productivity, reduce errors, 
              and focus on what matters most - building amazing software.
            </p>
            <div className="hero-cta">
              <button className="cta-primary">Start Free Trial</button>
              <button className="cta-secondary">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Developers</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat">
                <span className="stat-number">50%</span>
                <span className="stat-label">Time Saved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features for Modern Development</h2>
            <p className="section-subtitle">
              Everything you need to streamline your development process with AI-powered automation
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3 className="feature-title">Smart Code Analysis</h3>
              <p className="feature-description">
                AI-powered code review and optimization suggestions to improve code quality and performance
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Automated Testing</h3>
              <p className="feature-description">
                Intelligent test generation and execution with comprehensive coverage analysis
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3 className="feature-title">CI/CD Integration</h3>
              <p className="feature-description">
                Seamless integration with popular CI/CD platforms for automated deployment pipelines
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Performance Monitoring</h3>
              <p className="feature-description">
                Real-time performance insights and automated optimization recommendations
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Security Scanning</h3>
              <p className="feature-description">
                Automated vulnerability detection and security best practice recommendations
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Analytics Dashboard</h3>
              <p className="feature-description">
                Comprehensive analytics and reporting for workflow optimization and team insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="testimonials-container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Developers Worldwide</h2>
            <p className="section-subtitle">
              See what developers and teams are saying about AI Auto Workflow
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "AI Auto Workflow has revolutionized our development process. We've reduced our 
                  deployment time by 60% and caught critical bugs before they reach production."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SR</div>
                <div className="author-info">
                  <div className="author-name">Sarah Rodriguez</div>
                  <div className="author-title">Senior DevOps Engineer at TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The AI-powered code analysis has improved our code quality significantly. 
                  It's like having a senior developer reviewing every commit."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MJ</div>
                <div className="author-info">
                  <div className="author-name">Michael Johnson</div>
                  <div className="author-title">Lead Developer at StartupXYZ</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Setup was incredibly easy, and the ROI was immediate. Our team now focuses 
                  on building features instead of managing deployment pipelines."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div className="author-info">
                  <div className="author-name">Alex Liu</div>
                  <div className="author-title">CTO at InnovateLabs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home