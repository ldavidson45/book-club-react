import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Book.css";

class BookTitle extends Component {
  render() {
    const titles = this.props.books.map(book => {
      return (
        <div
          className="book-tile"
          style={{
            background: `linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(${book.image})`
          }}
        >
          <a className="book-title" href={`/book/${book._id}`}>
            {book.title}
          </a>
        </div>
      );
    });
    return <div>{titles}</div>;
  }
}

export default BookTitle;
