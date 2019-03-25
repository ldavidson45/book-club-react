import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

class BookTile extends Component {
  render() {
    const titles = this.props.books.map(book => {
      return (
        <div
          className="book-tile"
          style={{
            background: `url(${book.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <a className="book-title" href={`/book/${book._id}`}>
            {book.title}
          </a>
        </div>
      );
    });
    return <div className="books-read-container">{titles}</div>;
  }
}

export default BookTile;
