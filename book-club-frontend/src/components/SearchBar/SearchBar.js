import React, { Component } from "react";
import Axios from "axios";

class SearchBar extends Component {
  render() {
    return (
      <input
        className="form-input"
        placeholder="Search for a book!"
        name="searchTerms"
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBar;
