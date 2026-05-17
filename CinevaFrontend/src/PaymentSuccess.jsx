import React, { Component } from 'react';

class PaymentSuccess extends Component {
  render() {
    return (
      <div className="payment-success-overlay">
        <div className="payment-success-container">
          <div className="top-party-pop">
            <img src="/PartyPop.jpg" alt="Top Party Pop" />
          </div>
          <div className="centered-party-pop">
            <img src="/PartyPop.jpg" alt="Centered Party Pop" />
          </div>
          <h2 className="success-title">Payment Successful</h2>
          <p className="success-message">Your payment has been successfully processed!</p>
          <p className="success-message">Welcome to Cineva - Start exploring now!</p>
          <button className="continue-btn" onClick={this.props.onContinue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default PaymentSuccess;