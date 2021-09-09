import React, { Fragment } from "react";
import ListItem from "./list-item";

export default class List extends React.Component {
  render() {
    const items = this.props.items;
    const itemsList = items.map((item, index) => {
      return (
        <ListItem
          text={item}
          handleDelete={this.props.handleDelete}
          id={index}
        />
      );
    });

    return (
      <Fragment>
        <ul>{itemsList}</ul>
      </Fragment>
    );
  }
}
