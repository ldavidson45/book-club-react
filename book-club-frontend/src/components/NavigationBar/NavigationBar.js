import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <nav>
        <Link className="logo-container" to="/">
          <img
            className="logo-img"
            alt="bee logo"
            src={require("../../images/bee.svg")}
          />
        </Link>
        <div className="nav-links-container">
          {/* <Link className="nav-link" to="/new-book">
            <p></p>
          </Link> */}
          <input
            className="form-input"
            placeholder="Search for a book!"
            onChange={this.props.handleInput}
          />

          {/* dropdown menu */}

          <div className="nav-link dropdown">
            <p>Menu</p>
            <div className="drop-down-container">
              <Link className="drop-down-item" to="/signup">
                Signup
              </Link>
              <Link className="drop-down-item" to="/login">
                Login
              </Link>
              <Link
                className="drop-down-item"
                to="/"
                onClick={this.props.handleLogout}
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
