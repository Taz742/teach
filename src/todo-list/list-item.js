import React from "react";

export default class ListItem extends React.Component {
  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleDelete}>Delete me</button>
      </li>
    );
  }
}
