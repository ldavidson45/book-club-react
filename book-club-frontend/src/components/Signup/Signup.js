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
      <div>
        <form onSubmit={this.signupAndRedirect}>
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
              Password:
              <input
                type="text"
                name="password"
                onChange={this.props.handleInput}
              />
            </label>
            <button className="form-button" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
