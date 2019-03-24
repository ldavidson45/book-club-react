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
    this.addToHasRead = this.addToHasRead.bind(this);
    this.addToWillRead = this.addToWillRead.bind(this);
  }

  componentDidMount() {
    console.log("booklist mounted");
  }
  getData(event) {
    event.preventDefault();
    this.setState({ books: [] });
    Axios.post("http://localhost:3000/api/books", this.props).then(res => {
      const books = res.data;
      this.setState({ books });
    });
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

  addToHasRead(event) {
    event.preventDefault();
    const bookId = event.target.value;
    const email = this.props.email;

    Axios.post("http://localhost:3000/api/books/hasRead", {
      bookId,
      email
    }).then(res => {
      console.log(res);
    });
  }

  addToWillRead(event) {
    event.preventDefault();
    const bookId = event.target.value;
    const email = this.props.email;

    Axios.post("http://localhost:3000/api/books/toRead", {
      bookId,
      email
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    const books = this.state.books.map(book => {
      if (!book.volumeInfo.imageLinks) {
        book.volumeInfo.imageLinks = "Hello";
      }
      return (
        <div className="card" key={book.id}>
          <Link key={book.id} className="book-title" to={"/books/" + book.id}>
            <img
              className="book-cover"
              src={book.volumeInfo.imageLinks.thumbnail}
            />
            <h4 className="book-title">{book.volumeInfo.title}</h4>
          </Link>
          <button value={book.id} onClick={this.addToBooksRead}>
            I've Read This!
          </button>
          <button value={book.id} onClick={this.addToWillRead}>
            Add to Reading List!
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
