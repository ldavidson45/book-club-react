import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <nav>
        <Link className="nav-link-home" to="/">
          Book Club Library
        </Link>
        <Link className="nav-link" to="/new-book">
          Add Book
        </Link>
        {/* dropdown menu */}
        <div className="nav-dropdown">
          <p className="nav-link">Menu</p>
          <div className="nav-dropdown-content">
            <Link className="nav-link-dropdown" to="/signup">
              Signup
            </Link>
            <Link className="nav-link-dropdown" to="/login">
              Login
            </Link>
            <Link
              className="nav-link-dropdown"
              to="/"
              onClick={this.props.handleLogout}
            >
              Log out
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
