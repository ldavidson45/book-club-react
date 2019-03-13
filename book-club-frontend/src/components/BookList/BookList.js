import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import Axios from "axios";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books,
      bookToDelete: undefined
    };
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(event) {
    const bookId = event.target.value;
    Axios.delete(`http://localhost:3000/api/books/${bookId}`, {
      params: bookId
    }).then(res => {
      this.props.getData()
      this.props.history.push("/")    });

    event.preventDefault();
  }

  render() {
    const books = this.props.books.map(book => {
      return (
        <div className="card" key={book._id}>
          <Link to={"/books/" + book._id}>
            <img className="book-cover" src={book.image} />
            <h4 className="book-title">{book.title}</h4>
          </Link>
          <button value={book._id} onClick={this.deleteBook}>
            Delete
          </button>
        </div>
      );
    });
    return <div className="cards-container">{books}</div>;
  }
}

export default BookList;
