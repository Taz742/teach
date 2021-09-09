import React, { Fragment } from "react";
import Header from "./header";
import List from "./list";
import "./styles.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  handleAddNewItem = (item) => {
    const items = this.state.items;
    items.push(item);

    this.setState({
      items,
    });
  };

  handleDelete = (deleteIndex) => {
    const items = this.state.items;
    const newItemsList = items.filter((item, index) => {
      return index !== deleteIndex;
    });

    this.setState({
      items: newItemsList,
    });

    console.log("handle delete: ", deleteIndex);
  };

  render() {
    const items = this.state;
    console.log("items: ", items);

    return (
      <Fragment>
        <Header onAddNewItem={this.handleAddNewItem} />
        <List items={this.state.items} handleDelete={this.handleDelete} />
      </Fragment>
    );
  }
}
