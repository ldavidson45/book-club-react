import React, { Component } from "react";
import Axios from "axios";
import "./NewBook.css";

class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    Axios.post("http://localhost:3000/api/books", this.state).then(res => {
      this.props.history.push("/");
    });
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-content">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </label>
            <button className="form-button" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default NewBook;
