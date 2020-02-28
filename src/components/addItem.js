import React, { Component } from "react";

export default class AddItem extends Component {
  state = {
    value: ""
  };
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="add-item">
        <h1>To-Do App!</h1>
        <h3>Add New To-Do</h3>
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.onChangeValue}
          placeholder="Enter new task"
        ></input>

        <div>
          <input
            className="button"
            onClick={() => {
              this.props.onAdditem(this.state.value);
              this.setState({ value: "" });
            }}
            type="button"
            value="Add"
          />
        </div>
      </div>
    );
  }
}
