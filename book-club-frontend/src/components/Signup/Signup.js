import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signupAndRedirect = this.signupAndRedirect.bind(this);
  }

  signupAndRedirect(event) {
    this.props.handleSignup(event);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="login-heading">Welcome!</h1>
        <form onSubmit={this.signupAndRedirect}>
          <div className="form-content">
            <h3 className="form-title">Create An Account</h3>
            <label className="login-label">
              Email:
              <input
                type="text"
                name="email"
                placeholder=""
                onChange={this.props.handleInput}
              />
            </label>
            <label className="login-label">
              Password:
              <input
                type="password"
                name="password"
                onChange={this.props.handleInput}
              />
            </label>
            <button className="form-button" type="submit">
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
