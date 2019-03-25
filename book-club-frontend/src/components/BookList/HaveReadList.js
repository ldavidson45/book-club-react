import React, { Component } from "react";
import BookTile from "../Book/BookTile";
import Book from "../Book/Book";

class HaveReadList extends Component {
  render() {
    return (
      <div className="books-read-list">
        <h3>I've Read:</h3>
        <BookTile books={this.props.user.booksRead} />
      </div>
    );
  }
}

export default HaveReadList;
