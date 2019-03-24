import React, { Component } from "react";
import HaveReadList from "../BookList/HaveReadList";

class UserProfile extends Component {
  render() {
    const booksRead = this.props.user.booksRead;
    let bookList = [];
    if (booksRead) {
      bookList = booksRead.map(book => {
        return <li>{book.title}</li>;
      });
    }
    return booksRead ? (
      <div>
        <h1>{this.props.user.email}</h1>
        <HaveReadList user={this.props.user} />
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default UserProfile;
