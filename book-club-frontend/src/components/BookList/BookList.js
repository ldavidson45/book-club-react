import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import Axios from "axios";
import Book from "../Book/Book";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookToDelete: undefined,
      searchTerms: ""
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.getData = this.getData.bind(this);
  }

  // API Call to DB - returns list of books
  // componentDidMount() {
  //   // this.getData();
  // }

  getData(e) {
    console.log(this.state.searchTerms);
    Axios.get("http://localhost:3000/api/books").then(res => {
      const books = res.data;
      this.setState({ books });
      console.log(books);
    });
    e.preventDefault();
  }

  deleteBook(event) {
    const bookId = event.target.value;
    Axios.delete(`http://localhost:3000/api/books/${bookId}`, {
      params: bookId
    }).then(res => {
      this.getData();
      this.props.history.push("/");
    });
    event.preventDefault();
  }

  render() {
    const books = this.state.books.map(book => {
      if (!book.volumeInfo.imageLinks) {
        book.volumeInfo.imageLinks = "Hello";
      }
      console.log(book.volumeInfo.imageLinks);
      return (
        <div className="card" key={book._id}>
          <Link className="book-title" to={"/books/" + book._id}>
            <img
              className="book-cover"
              src={book.volumeInfo.imageLinks.thumbnail}
            />
            <h4 className="book-title">{book.volumeInfo.title}</h4>
          </Link>
          <button value={book._id} onClick={this.deleteBook}>
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.getData}>
          <input
            type="text"
            name="searchTerms"
            placeholder="search by title"
            onChange={this.props.handleInput}
          />
          <button className="form-button">Submit</button>
        </form>
        <div className="cards-container">{books}</div>;
      </div>
    );
  }
}

export default BookList;
