import React, { Component } from 'react';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-overlay">
        <div className="welcome-container">
          <div className="top-party-pop">
            <img src="/PartyPop.jpg" alt="Top Party Pop" />
          </div>
          <div className="centered-party-pop">
            <img src="/PartyPop.jpg" alt="Centered Party Pop" />
          </div>
          <h2 className="welcome-title">Welcome to Cineva!</h2>
          <p className="welcome-message">You're all set to start exploring movies, series, and more!</p>
          <button className="close-welcome-btn" onClick={this.props.onClose}>Start Exploring</button>
        </div>
      </div>
    );
  }
}

export default WelcomePage;