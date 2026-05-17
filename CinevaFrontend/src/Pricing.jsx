import React, { Component } from 'react';

class Pricing extends Component {
  handleChoosePlan = (plan) => {
    this.props.onSelectPlan(plan);
  };

  render() {
    return (
      <div className="pricing-overlay">
        <div className="pricing-container">
          <button className="back-btn" onClick={this.props.onBack}>Back</button>
          <h2 className="pricing-title">Choose Your Pricing Plan</h2>
          <div className="pricing-plans">
            {/* Pay Per Hour */}
            <div className="pricing-plan">
              <h3 className="plan-title">Pay Per Hour</h3>
              <p className="plan-price">₹5 / Hour</p>
              <p className="plan-description">ONLY pay for what you watch.</p>
              <p className="plan-description">One hour. One movie. One unforgettable moment.</p>
              <p className="plan-description">No subscriptions— pure freedom, ₹5 at a time.</p>
              <button 
                className="choose-plan-btn" 
                onClick={() => this.handleChoosePlan({ name: 'Pay Per Hour', price: '₹5 / Hour' })}
              >
                Choose Plan
              </button>
            </div>

            {/* Monthly Plan */}
            <div className="pricing-plan">
              <h3 className="plan-title">Monthly Plan</h3>
              <p className="plan-price">₹149 / Month</p>
              <p className="plan-description">Unlimited entertainment. One simple price.</p>
              <p className="plan-description">Binge the heart out, all month long.</p>
              <p className="plan-description">Movies, series, memories — yours, without limits.</p>
              <button 
                className="choose-plan-btn" 
                onClick={() => this.handleChoosePlan({ name: 'Monthly Plan', price: '₹149 / Month' })}
              >
                Choose Plan
              </button>
            </div>

            {/* Yearly Plan */}
            <div className="pricing-plan">
              <h3 className="plan-title">Yearly Plan</h3>
              <p className="plan-price">₹1500 / Year</p>
              <p className="plan-description">“A full year of stories, emotions, and unforgettable nights.</p>
              <p className="plan-description">Stream smarter. Save bigger.”</p>
              <p className="plan-description">One payment, 365 days of endless adventure.</p>
              <button 
                className="choose-plan-btn" 
                onClick={() => this.handleChoosePlan({ name: 'Yearly Plan', price: '₹1500 / Year' })}
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div className="pricing-footer">
            <span className="step-text">Step-2</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;