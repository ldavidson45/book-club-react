import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

class BookTile extends Component {
  render() {
    const titles = this.props.books.map(book => {
      return (
        <div
          key={book._id}
          className="book-tile"
          style={{
            background: `url(${book.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <Link className="book-title" to={`/book/${book._id}`}>
            {book.title}
          </Link>
        </div>
      );
    });
    return <div className="books-read-container">{titles}</div>;
  }
}

export default BookTile;
