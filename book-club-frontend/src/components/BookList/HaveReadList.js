import React, { Component } from "react";
import BookTile from "../Book/BookTile";

class HaveReadList extends Component {
  render() {
    return (
      <div className="books-read-list">
        <h3 className="book-list-header">I've Read</h3>
        <BookTile books={this.props.user.booksRead} />
      </div>
    );
  }
}

export default HaveReadList;
