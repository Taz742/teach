import React, { Fragment } from "react";
import Header from "./header";
import List from "./list";
import "./styles.css";

let currentId = 0;

//react lifecycle component methods

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedItems: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/todo-items")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response,
        });
      })
      .catch((err) => {});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("I am updated", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("I am un mounted");
  }

  handleAddNewItem = (title) => {
    fetch(`http://localhost:3001/todo-items/create?title=${title}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        const items = this.state.items;
        items.push(response);

        this.setState({
          items,
        });
      })
      .catch((err) => {});
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
