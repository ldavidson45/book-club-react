import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import BookList from "../BookList/Booklist"
import Book from "../Book/Book"


class App extends Component {
  render() {
    return (
      <div>

        <nav>
          <h3>Book Club Library</h3>
        </nav>

        <Route path="/" render={(props) => {
          return <BookList {...props} />
        }} />

      </div>
    );
  }
}

export default App;
