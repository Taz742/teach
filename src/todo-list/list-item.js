import React from "react";

export default class ListItem extends React.Component {
  handleDelete = () => {
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

    const firstName = "Tazo";
    const lastName = "Leladze";
    const fullName = `${firstName} ${lastName}`;

    console.log(className, firstName, lastName, fullName);

    return (
      <li className={className} onClick={this.handleSelectItem}>
        {this.props.text}
        <button onClick={this.handleDelete} className="todo-list-remove-btn">
          Delete me
        </button>
      </li>
    );
  }
}
