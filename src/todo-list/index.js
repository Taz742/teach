import React, { Fragment } from "react";
import Header from "./header";
import List from "./list";
import "./styles.css";

let currentId = 0;

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "temp title",
          id: ++currentId,
        },
        {
          title: "temp title 2",
          id: ++currentId,
        },
      ],
      selectedItems: [],
    };
  }

  handleAddNewItem = (item) => {
    const items = this.state.items;
    items.push({
      title: item,
      id: ++currentId,
    });

    this.setState({
      items,
    });
  };

  handleDelete = (id) => {
    const items = this.state.items;
    const newItemsList = items.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      items: newItemsList,
    });
  };

  handleSelectItem = (id) => {
    const currentSelectedItems = this.state.selectedItems;
    const found = currentSelectedItems.find((_id) => _id === id) !== undefined;

    if (found) {
      this.setState({
        selectedItems: currentSelectedItems.filter((_id) => _id !== id),
      });
    } else {
      currentSelectedItems.push(id);
      this.setState({
        selectedItems: currentSelectedItems,
      });
    }
  };

  render() {
    const items = this.state;
    console.log("items: ", items, this.state.selectedItems);

    return (
      <Fragment>
        <Header onAddNewItem={this.handleAddNewItem} />
        <List
          items={this.state.items}
          selectedItems={this.state.selectedItems}
          handleDelete={this.handleDelete}
          handleSelectItem={this.handleSelectItem}
        />
      </Fragment>
    );
  }
}
