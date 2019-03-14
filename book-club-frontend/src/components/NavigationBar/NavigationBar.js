import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./NavigationBar.css"

class NavigationBar extends Component {
    render() {
        return (
            <nav>
            <h3>Book Club Library</h3>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/new-book">
              Add Book
            </Link>
{/* dropdown menu */}
            <div className="nav-dropdown">
            <span>Menu</span>
            <div className="nav-dropdown-content">
            <Link className="nav-link-dropdown" to="/signup">
              Signup
            </Link>
            <Link className="nav-link-dropdown" to="/login">
              Login
            </Link>
            <Link className="nav-link-dropdown" to="/" onClick={this.handleLogout}>
              Log out
            </Link>
            </div>
            </div>


          </nav>
        );
    }
}

export default NavigationBar;