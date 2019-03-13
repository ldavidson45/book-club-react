import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleLogin}>
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
