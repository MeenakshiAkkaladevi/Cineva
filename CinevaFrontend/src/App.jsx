import React, { Component } from 'react';
import './App.css';
import Pricing from './Pricing';
import Payment from './Payment';
import PaymentSuccess from './PaymentSuccess';
import MoviesPage from './MoviesPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showAbout: false, 
      showSignIn: false, 
      showSignUp: false, 
      showPricing: false, 
      showPayment: false, 
      showPaymentSuccess: false, 
      showMovies: false,
      selectedPlan: null,
      signupForm: { email: '', password: '' },
      signinForm: { email: '', password: '' },
      errorMessage: '',
      users: [], // Mock database to store registered users
    };

    this.handleSelectPlan = this.handleSelectPlan.bind(this);
    this.handlePaymentSuccess = this.handlePaymentSuccess.bind(this);
    this.handleContinueToSignIn = this.handleContinueToSignIn.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignInInputChange = this.handleSignInInputChange.bind(this);
  }

  handleSelectPlan(plan) {
    this.setState({ showPricing: false, showPayment: true, selectedPlan: plan });
  }

  handlePaymentSuccess() {
    this.setState({ showPayment: false, showPaymentSuccess: true });
  }

  handleContinueToSignIn() {
    this.setState({ showPaymentSuccess: false, showSignIn: true });
  }

  handleSignInInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      signinForm: { ...this.state.signinForm, [name]: value },
    });
  }

  handleSignIn() {
    const { email, password } = this.state.signinForm;
    const { users } = this.state;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      this.setState({ showSignIn: false, showMovies: true, errorMessage: '' }, () => {
        console.log('Sign-in successful. Current state:', this.state); // Debug log
      });
    } else {
      this.setState({ errorMessage: 'Invalid credentials. Please sign up.' });
    }
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      signupForm: { ...this.state.signupForm, [name]: value },
    });
  }

  handleSignUpSubmit() {
    const { email, password } = this.state.signupForm;
    document.getElementById('signup-email').style.border = '';
    document.getElementById('signup-password').style.border = '';

    if (!email || !password) {
      if (!email) document.getElementById('signup-email').style.border = '1px solid red';
      if (!password) document.getElementById('signup-password').style.border = '1px solid red';
      return;
    }

    // Add user to mock database
    this.setState(prevState => ({
      users: [...prevState.users, { email, password }],
      showSignUp: false,
      showSignIn: true,
      signupForm: { email: '', password: '' },
      errorMessage: '',
    }), () => {
      alert('Sign-up successful! You can now sign in.');
      console.log('Users after sign-up:', this.state.users); // Debug log
    });
  }

  render() {
    const { signupForm, signinForm, errorMessage } = this.state;

    return (
      <div className="app">
        <video autoPlay muted loop className="background-video">
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="header">
          <label className="logo">Cineva</label>
          <div className="header-controls">
            <label className="nav-item" onClick={() => this.setState({ showAbout: true })}>About</label>
            <input type="text" placeholder="Search" className="search" />
            <button className="signin-btn" onClick={() => this.setState({ showSignIn: true })}>SignIn</button>
          </div>
        </div>

        {!this.state.showPricing && !this.state.showPayment && !this.state.showPaymentSuccess && !this.state.showMovies && !this.state.showSignIn && (
          <div className="main-content">
            <div className="headline">
              <label className="escape">Escape</label>
              <label className="into">Into <label className="stories">Stories</label></label>
              <label className="description">
                Discover an endless world of movies, series, and shows, each thoughtfully tailored to match your every mood, moment, and desire.
              </label>
              <button className="get-started" onClick={() => this.setState({ showSignUp: true })}>Get Started</button>
            </div>
          </div>
        )}

        {this.state.showAbout && (
          <div className="popup">
            <label className="popup-title">About Cineva</label>
            <label className="popup-text">Welcome to Cineva — a streaming experience designed around your choice, your pace, and your lifestyle.</label>
            <label className="popup-text">At Cineva, we offer affordable subscriptions or a Pay-Per-Hour model — perfect for casual watchers.</label>
            <label className="popup-text">Whether binge-watching or occasional viewing, Cineva ensures entertainment your way.</label>
            <label className="popup-text">Dive into a world tailored to your mood — and pay only for what you enjoy.</label>
            <label className="popup-text">Cineva — Your story. Your time. Your way.</label>
            <button className="close-btn" onClick={() => this.setState({ showAbout: false })}>Close</button>
          </div>
        )}

        {this.state.showSignIn && (
          <div className="signin-overlay">
            <div className="signin-container">
              <div className="signin-left">
                <label className="logo">Cineva</label>
                <div className="explore-text">
                  <label className="explore-title">Explore</label>
                  <label className="explore-title">New Worlds</label>
                  <label className="explore-subtitle">Where Every Story Finds a Place in Your Heart.</label>
                  <label className="explore-description">
                    Dive into unforgettable movies, series, and moments — all on your terms.
                  </label>
                </div>
              </div>
              <div className="signin-right">
                <div className="signin-form-container">
                  <label className="welcome-title">Welcome Back!!!</label>
                  <div className="input-group">
                    <label>Email/Phone number</label>
                    <input
                      type="text"
                      name="email"
                      value={signinForm.email}
                      onChange={this.handleSignInInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={signinForm.password}
                      onChange={this.handleSignInInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="forgot-password">
                    <label>Forgot Password?</label>
                  </div>
                  <button className="signin-button" onClick={this.handleSignIn}>SIGN IN</button>
                  {errorMessage && (
                    <div className="error-message">
                      {errorMessage} <span className="signup-link" onClick={() => this.setState({ showSignIn: false, showSignUp: true })}>Sign Up</span>
                    </div>
                  )}
                  <div className="separator">
                    <div className="line"></div>
                    <label>or</label>
                    <div className="line"></div>
                  </div>
                  <div className="signup-text">
                    <label onClick={() => this.setState({ showSignIn: false, showSignUp: true })}>
                      Are you new? Signup
                    </label>
                  </div>
                  <button className="close-btn" onClick={() => this.setState({ showSignIn: false })}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.showSignUp && (
          <div className="signup-overlay">
            <div className="signup-container">
              <div className="signup-left">
                <label className="signup-promo-title">WE ARE STREAMING SMARTER.</label>
                <label className="signup-promo-text">
                  Welcome to Cineva — a place where your mood meets your perfect match in movies and series.
                </label>
                <label className="signup-promo-text">
                  From endless binge nights to quick cinematic escapes, we offer flexible plans tailored for every dreamy.
                </label>
                <label className="signup-promo-text">
                  Your screen, your choice, your journey.
                </label>
              </div>
              <div className="signup-right">
                <div className="signup-form-container">
                  <label className="signup-title">SIGN UP</label>
                  <div className="input-group">
                    <label>Email/Phone number</label>
                    <input
                      id="signup-email"
                      type="text"
                      name="email"
                      value={signupForm.email}
                      onChange={this.handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div className="input-group">
                    <label>Set Password</label>
                    <input
                      id="signup-password"
                      type="password"
                      name="password"
                      value={signupForm.password}
                      onChange={this.handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <button className="signup-button" onClick={this.handleSignUpSubmit}>SIGN UP</button>
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                  <div className="signup-footer">
                    <label className="step-text">STEP-1</label>
                    <button
                      className="next-btn"
                      onClick={() => this.setState({ showSignUp: false, showPricing: true })}
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {this.state.showPricing && (
          <Pricing onBack={() => this.setState({ showPricing: false })} onSelectPlan={this.handleSelectPlan} />
        )}

        {this.state.showPayment && (
          <Payment 
            selectedPlan={this.state.selectedPlan} 
            onBack={() => this.setState({ showPayment: false, showPricing: true })} 
            onPaymentSuccess={this.handlePaymentSuccess}
          />
        )}

        {this.state.showPaymentSuccess && (
          <PaymentSuccess onContinue={this.handleContinueToSignIn} />
        )}

        {this.state.showMovies && (
          <MoviesPage />
        )}

        {!this.state.showPricing && !this.state.showPayment && !this.state.showPaymentSuccess && !this.state.showMovies && !this.state.showSignIn && (
          <div className="footer">
            <label>Helpline: +1 (800) 123-4567</label>
            <label>© 2025 Cineva. All rights reserved.</label>
          </div>
        )}
      </div>
    );
  }
}

export default App;