import React, { Fragment } from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddClick = () => {
    this.props.onAddNewItem(this.state.value);

    this.setState({
      value: "",
    });
  };

  render() {
    console.log("value is: ", this.state.value);

    return (
      <Fragment>
        <div className="todo-list-header">
          <h1 className="todo-list-title">To-Do List</h1>
          <div className="todo-list-new-item-container">
            <input
              className="todo-list-value"
              value={this.state.value}
              placeholder="Title..."
              onChange={this.handleValueChange}
            />
            <button
              className="todo-list-add-button"
              onClick={this.handleAddClick}
            >
              Add
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
