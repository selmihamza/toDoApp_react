import React, { Component } from "react";
import AddItem from "./components/addItem";
import ShowList from "./components/showList";
import PropTypes from "prop-types";
import "./App.css";

ShowList.propTypes = {
  list: PropTypes.array
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { text: "item1", isComplited: false },
        { text: "item2", isComplited: false },
        { text: "item3", isComplited: false }
      ],
      value: "",
      classNameCss: ""
    };
  }

  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  onAdditem = () => {
    this.setState({
      list: [
        ...this.state.list,
        { text: this.state.value, isComplited: false }
      ],
      value: ""
    });
  };
  onCompleteItem = i => {
    this.setState({
      classNameCss: "item-clicked",
      isComplited: !this.state.isComplited,
      list: this.state.list.map((el, index) =>
        i === index ? { ...el, isComplited: !el.isComplited } : el
      )
    });
  };
  onDeleteItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list
      };
    });
  };

  render() {
    return (
      <div className="App">
        <AddItem
          onAdditem={this.onAdditem}
          onChangeValue={this.onChangeValue}
          value={this.state.value}
        />

        <ShowList
          list={this.state.list}
          onDeleteItem={this.onDeleteItem}
          onCompleteItem={this.onCompleteItem}
          classNameCss={this.state.classNameCss}
        />
      </div>
    );
  }
}
