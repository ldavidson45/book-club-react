import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
// import BookList from "../BookList/BookList";
// import Book from "../Book/Book";
// import NewBook from "../NewBook/NewBook";
// import Signup from "../Signup/Signup";
import Login from "../LogIn/Login";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserProfile from "../ProfilePage/UserProfile";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      id: "",
      isLoggedIn: false,
      user: {}
    };
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.getData = this.getData.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }

  componentDidMount() {
    console.log("app mounted");
    this.getData();
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  getData() {
    Axios.get(`http://localhost:3000/user/${localStorage.userId}`).then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignup(event) {
    event.preventDefault();
    Axios.post("http://localhost:3000/user/signup", {
      email: this.state.email,
      password: this.state.password,
      name: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      }
    })
      .then(res => {
        localStorage.token = res.data.token;
        localStorage.userId = res.data.user._id;

        this.setState({
          isLoggedIn: true,
          id: localStorage.userId,
          user: res.data.user
        });
        console.log(this.state.isLoggedIn);
      })
      .catch(err => console.log(err));
  }

  handleLogin(event) {
    event.preventDefault();
    Axios.post("http://localhost:3000/user/login", {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(res);
        localStorage.token = res.data.token;
        localStorage.userId = res.data.user._id;
        this.setState({
          isLoggedIn: true,
          id: localStorage.userId,
          user: res.data.user
        });
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

  handleClearInput() {
    this.setState({
      email: "",
      password: ""
    });
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
            <Route
              path="/"
              exact
              strict
              render={props => {
                return this.state.isLoggedIn ? (
                  <UserProfile
                    {...this.state}
                    {...props}
                    getData={this.getData}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route
              path="/login"
              render={props => {
                return this.state.isLoggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <Login
                    {...this.state}
                    {...props}
                    handleInput={this.handleInput}
                    handleLogin={this.handleLogin}
                    handleSignup={this.handleSignup}
                    handleClearInput={this.handleClearInput}
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
