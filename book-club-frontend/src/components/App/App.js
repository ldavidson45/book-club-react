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
import Axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };

    this.getData = this.getData.bind(this)
  }
  componentDidMount() {
    this.getData()
}

  getData () {
    Axios.get("http://localhost:3000/api/books")
  .then(res => {
    const books = res.data;
    this.setState({ books });
  })
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
        </nav>

        {/* Routes */}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return <BookList {...this.state} getData={this.getData} {...props} />;
            }}
          />

          <Route
            path="/books/:id"
            exact
            render={(props) => {
              return <Book {...this.state} {...props} />;
            }}
          />

          <Route
            path="/new-book"
            exact
            render={(props) => {
              return <NewBook {...props} getData={this.getData} books={this.state.books}/>;
            }}
          />

        </Switch>
      </div>
    );
  }
}

export default App;