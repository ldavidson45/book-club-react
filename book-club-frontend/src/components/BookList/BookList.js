import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BookList.css"

class BookList extends Component {

      addBook(newBook) {
        this.state.books.push(newBook)
      }

  render() {
    console.log(this.props.books)
    const books = this.props.books.map(book => {
      return <div className="card" key={book._id}>
      <Link to={"/books/"+book._id}>
      <img className="book-cover" src={book.image} />
      <h4 className="book-title">{book.title}</h4>
      </Link>
      </div>;
    });
    return <div className="cards-container">{books}</div>;
  }
}

export default BookList;
