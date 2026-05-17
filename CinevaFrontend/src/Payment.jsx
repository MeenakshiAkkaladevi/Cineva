import React, { Component } from 'react';

class Payment extends Component {
  handlePayNow = () => {
    this.props.onPaymentSuccess();
  };

  render() {
    const { selectedPlan, onBack } = this.props;
    return (
      <div className="payment-overlay">
        <div className="payment-container">
          <button className="back-btn" onClick={onBack}>Back</button>
          <h2 className="payment-title">Payment Details</h2>
          <div className="payment-content">
            {/* Selected Plan */}
            <div className="selected-plan">
              <h3 className="selected-plan-title">Selected Plan</h3>
              <p className="plan-name">{selectedPlan?.name}</p>
              <p className="plan-price">{selectedPlan?.price}</p>
            </div>

            {/* Payment Method */}
            <div className="payment-method">
              <h3 className="payment-method-title">Payment Method</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment-method" defaultChecked />
                  Credit Card
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment-method" />
                  Debit Card
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment-method" />
                  UPI
                </label>
              </div>
            </div>

            {/* Payment Details Form */}
            <div className="payment-details">
              <h3 className="payment-details-title">Enter Payment Details</h3>
              <div className="input-group">
                <label>Card Number</label>
                <input type="text" className="input-field" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Expiry Date</label>
                  <input type="text" className="input-field" placeholder="MM/YY" />
                </div>
                <div className="input-group">
                  <label>CVV</label>
                  <input type="text" className="input-field" placeholder="123" />
                </div>
              </div>
              <div className="input-group">
                <label>Card Holder Name</label>
                <input type="text" className="input-field" placeholder="John Doe" />
              </div>
            </div>

            {/* Pay Button */}
            <button className="pay-btn" onClick={this.handlePayNow}>Pay Now</button>
          </div>
          <div className="payment-footer">
            <span className="step-text">Step-3</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;