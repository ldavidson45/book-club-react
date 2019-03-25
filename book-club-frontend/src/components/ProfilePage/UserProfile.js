import React, { Component } from "react";
import HaveReadList from "../BookList/HaveReadList";
import ToReadList from "../BookList/ToReadList";
import "./UserProfile.css";

class UserProfile extends Component {
  render() {
    const booksRead = this.props.user.booksRead;

    return booksRead ? (
      <div className="profile-container">
        <h1>{this.props.user.email}</h1>
        <div className="profile-lists">
          <HaveReadList user={this.props.user} />
          <ToReadList user={this.props.user} />
        </div>
      </div>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default UserProfile;
