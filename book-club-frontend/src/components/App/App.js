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

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h3>Book Club Library</h3>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return <BookList {...props} />;
            }}
          />
          <Route
            path="/books/:id"
            exact
            render={props => {
              return <Book {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
