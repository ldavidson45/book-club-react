import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import BookList from "../BookList/BookList";
import Book from "../Book/Book";
import NewBook from "../NewBook/NewBook";
import Signup from "../Signup/Signup";
import Axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignup(event) {
    event.preventDefault();
    Axios.post("http://localhost:3000/users/signup", {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <nav>
          <h3>Book Club Library</h3>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/new-book">
            Add Book
          </Link>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </nav>

        {/* Routes */}
        <Switch>
          {/* render home page with book list */}
          <Route
            path="/"
            exact
            render={props => {
              return (
                <BookList {...this.state} getData={this.getData} {...props} />
              );
            }}
          />
          {/* view an individual book */}
          <Route
            path="/books/:id"
            exact
            render={props => {
              return <Book {...this.state} {...props} />;
            }}
          />
          {/* create a new book in the DB */}
          <Route
            path="/new-book"
            exact
            render={props => {
              return (
                <NewBook
                  {...props}
                  getData={this.getData}
                  books={this.state.books}
                />
              );
            }}
          />

          {/* go to the signup page */}
          <Route
            path="/signup"
            render={props => {
              return (
                <Signup
                  handleSignup={this.handleSignup}
                  handleInput={this.handleInput}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
