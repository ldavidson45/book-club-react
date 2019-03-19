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
            <h3>Sign In</h3>
            <label className="login-label">
              Email:
              <input
                type="text"
                name="email"
                onChange={this.props.handleInput}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
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
