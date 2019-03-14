import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginAndRedirect = this.redirect.bind(this)
  }

  loginAndRedirect (event) {
    this.props.handleLogin(event)
    this.props.history.push("/")  }

  render() {
    const isLoggedIn = this.props.isLoggedIn

    return (
      <div>
        <form onSubmit={this.loginAndRedirect}>
          <div className="form-content">
            <label>
              Email:
              <input
                type="text"
                name="email"
                onChange={this.props.handleInput}
              />
            </label>
            <label>
              Author:
              <input
                type="text"
                name="password"
                onChange={this.props.handleInput}
              />
            </label>
            <button className="form-button" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
