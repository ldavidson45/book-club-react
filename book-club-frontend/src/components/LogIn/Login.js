import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginAndRedirect = this.loginAndRedirect.bind(this);
  }

  loginAndRedirect(event) {
    this.props.handleLogin(event);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="login-heading">Welcome!</h1>
        <form onSubmit={this.loginAndRedirect}>
          <div className="form-content">
            <h3 className="form-title">Sign In</h3>
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
              Log In
            </button>
            <p>
              Don't have an account? <Link to="/signup">Create one!</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
