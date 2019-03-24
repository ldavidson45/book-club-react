import React, { Component } from "react";
import BookTitle from "../Book/BookTitle";
import Book from "../Book/Book";

class HaveReadList extends Component {
  render() {
    return (
      <div>
        <h3>I've Read:</h3>
        <BookTitle books={this.props.user.booksRead} />
      </div>
    );
  }
}

export default HaveReadList;
