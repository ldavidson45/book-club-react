import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./BookList.css"

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/books").then(res => {
      console.log(res);
      this.setState({
        books: res.data
      });
      // .catch(err => {
      //     console.log(err);
      //   });
    });
  }

  render() {
    const books = this.state.books.map(book => {
      return <div className="card" key={book._id}>
      <img className="book-cover" src={book.image} />
      <h4 className="book-title">{book.title}</h4>
      
      </div>;
    });
    return <div className="cards-container">{books}</div>;
  }
}

export default BookList;
