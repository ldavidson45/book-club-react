import React, { Component } from "react";
import BookTile from "../Book/BookTile";
import "./BookList.css";

class ToReadList extends Component {
  render() {
    return (
      <div className="books-to-read-list">
        <h3 className="book-list-header">Reading List</h3>
        <BookTile books={this.props.user.booksToRead} />
      </div>
    );
  }
}

export default ToReadList;
