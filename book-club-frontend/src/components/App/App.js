import React, { Component } from "react";
import "./App.css";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import BookList from "../BookList/BookList";
import Book from "../Book/Book";
import NewBook from "../NewBook/NewBook";
import Signup from "../Signup/Signup";
import Login from "../LogIn/Login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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
    console.log(this.state.isLoggedIn);
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
        console.log(this.state.isLoggedIn);
      })
      .catch(err => console.log(err));
  }

  handleLogin(event) {
    event.preventDefault();
    Axios.post("http://localhost:3000/users/login", {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({ isLoggedIn: true });
        console.log(this.state.isLoggedIn);
      })
      .catch(err => console.log(err));
  }

  handleLogout(event) {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    console.log(isLoggedIn);
    return (
      <div>
        <NavigationBar handleLogout={this.handleLogout} />
        <main>
          {/* Routes */}
          <Switch>
            {/* render home page with book list */}

            <Route
              path="/"
              exact
              render={props => {
                return isLoggedIn ? (
                  <BookList {...this.state} getData={this.getData} {...props} />
                ) : (
                  <Login
                    handleSignup={this.handleSignup}
                    handleLogin={this.handleLogin}
                    handleInput={this.handleInput}
                    {...props}
                    {...this.state}
                  />
                );
              }}
            />
            {/* view an individual book */}
            <Route
              path="/books/:id"
              exact
              render={props => {
                return isLoggedIn ? (
                  <Book {...this.state} {...props} />
                ) : (
                  "please log in"
                );
              }}
            />
            {/* create a new book in the DB */}
            <Route
              path="/new-book"
              exact
              render={props => {
                return isLoggedIn ? (
                  <NewBook
                    {...props}
                    getData={this.getData}
                    books={this.state.books}
                  />
                ) : (
                  "please log in"
                );
              }}
            />

            {/* go to the signup page */}
            <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    handleSignup={this.handleSignup}
                    handleLogin={this.handleLogin}
                    handleInput={this.handleInput}
                    {...props}
                    {...this.state}
                  />
                );
              }}
            />
            {/* go to log in page */}
            <Route
              path="/signup"
              render={props => {
                return (
                  <Signup
                    handleSignup={this.handleSignup}
                    handleInput={this.handleInput}
                    {...props}
                    {...this.state}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
