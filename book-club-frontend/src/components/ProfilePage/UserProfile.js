import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    const booksRead = this.props.user.booksRead;
    let bookList = [];
    if (booksRead) {
      bookList = booksRead.map(book => {
        return <li>{book.title}</li>;
      });
    }
    return (
      <div>
        <h1>{this.props.user.email}</h1>
        <ul>{bookList}</ul>
      </div>
    );
  }
}

export default UserProfile;
