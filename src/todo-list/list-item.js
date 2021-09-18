import React from "react";

export default class ListItem extends React.Component {
  handleDelete = (e) => {
    this.props.handleDelete(this.props.id);
  };

  handleSelectItem = () => {
    this.props.handleSelectItem(this.props.id);
  };

  render() {
    const isSelected = this.props.isSelected;
    const className = `todo-list-item${
      isSelected ? " todo-list-item-selected" : ""
    }`;

    return (
      <li className={className} onClick={this.handleSelectItem}>
        <span className="todo-list-item-title">{this.props.text}</span>
        <button onClick={this.handleDelete} className="todo-list-remove-btn">
          Delete me
        </button>
      </li>
    );
  }
}
