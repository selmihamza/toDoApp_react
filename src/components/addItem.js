import React, { Component } from "react";

export default class AddItem extends Component {
  render() {
    return (
      <div className="add-item">
        <h1>To-Do App!</h1>
        <h3>Add New To-Do</h3>
        <input
          className="input"
          type="text"
          ref="newitem"
          value={this.props.value}
          onChange={this.props.onChangeValue}
          placeholder="Enter new task"
        ></input>

        <div >
          <input
            className="button"
            onClick={() => this.props.onAdditem()}
            type="button"
            value="Add"
          />
        </div> 
      </div>
    );
  }
}
