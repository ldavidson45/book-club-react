import React, { Component } from "react";

class FormInput extends Component {
  render() {
    return (
      <label className="form-label">
        {this.props.label}
        <input
          className="form-input"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.name}
          onChange={this.props.handleInput}
        />
      </label>
    );
  }
}

export default FormInput;
