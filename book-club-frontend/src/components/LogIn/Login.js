import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import FormInput from "./FormInput";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Log In",
      action: "Log In"
    };
    this.loginAndRedirect = this.loginAndRedirect.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
  }

  componentDidMount() {
    console.log("login mounted");
  }
  loginAndRedirect(event, next) {
    this.props.handleLogin(event);
  }

  renderSignUp(event) {
    this.props.handleClearInput();
    let newState;
    if (this.state.greeting === "Log In") {
      newState = "Sign Up";
    } else {
      newState = "Log In";
    }
    this.setState({
      greeting: newState,
      action: newState
    });
    console.log(this);
  }

  render() {
    var form;
    console.log(this.props);
    if (this.state.action === "Sign Up") {
      form = (
        <form className="login-signup-form">
          <h2 className="form-title">{this.state.greeting}</h2>

          <FormInput label="First Name:" name="firstName" {...this.props} />
          <FormInput label="Last Name:" name="lastName" {...this.props} />
          <FormInput label="Email:" name="email" {...this.props} />
          <FormInput
            label="Password:"
            name="password"
            {...this.props}
            type="password"
          />
          <button className="form-button" onClick={this.props.handleSignup}>
            Create New Account
          </button>
          <span className="signup-link" onClick={this.renderSignUp}>
            Login here
          </span>
        </form>
      );
    } else {
      form = (
        <form className="login-signup-form">
          <h2 className="form-title">{this.state.greeting}</h2>
          <FormInput label="Email:" name="email" {...this.props} />
          <FormInput
            label="Password:"
            name="password"
            {...this.props}
            type="password"
          />{" "}
          <button className="form-button" onClick={this.props.handleLogin}>
            Log In
          </button>
          <span className="signup-link" onClick={this.renderSignUp}>
            Need an account? Create one here!
          </span>
        </form>
      );
    }

    return <div className="login-signup-container">{form}</div>;
  }
}

export default Login;
