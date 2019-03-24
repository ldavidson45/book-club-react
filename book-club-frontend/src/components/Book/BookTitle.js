import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookTitle extends Component {
  render() {
    const titles = this.props.books.map(book => {
      return (
        <li>
          <Link to="##">{book.title}</Link>;
        </li>
      );
    });
    return <div>{titles}</div>;
  }
}

export default BookTitle;
