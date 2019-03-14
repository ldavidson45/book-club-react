import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookList.css";
import Axios from "axios";
import Book from "../Book/Book"

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookToDelete: undefined
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.getData = this.getData.bind(this)
  }

  // API Call to DB - returns list of books
  componentDidMount() {
    this.getData()
    }

  getData() {
    Axios.get("http://localhost:3000/api/books")
    .then(res => {
      const books = res.data;
      this.setState({ books });
    })
}

  deleteBook(event) {
    const bookId = event.target.value;
    Axios.delete(`http://localhost:3000/api/books/${bookId}`, {
      params: bookId
    }).then(res => {
      this.getData()
      this.props.history.push("/");
    });
    event.preventDefault();
  }

  render() {
    const books = this.state.books.map(book => {
      return (
       <div className="card" key={book._id}>
          
          <Link className="book-title" to={"/books/" + book._id}>
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
