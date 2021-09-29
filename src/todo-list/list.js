import React, { Fragment } from "react";
import ListItem from "./list-item";

// export default class List extends React.Component {
//   render() {
//     const items = this.props.items;
//     const selectedItems = this.props.selectedItems;

//     const itemsList = items.map((item, index) => {
//       return (
//         <ListItem
//           text={item.title}
//           handleDelete={this.props.handleDelete}
//           handleSelectItem={this.props.handleSelectItem}
//           isSelected={selectedItems.indexOf(item.id) !== -1}
//           id={item.id}
//         />
//       );
//     });

//     return (
//       <Fragment>
//         <ul className="todo-list">{itemsList}</ul>
//       </Fragment>
//     );
//   }
// }

const List = (props) => {
  const items = props.items;
  const selectedItems = props.selectedItems;

  console.log("props: ", props);

  const itemsList = items.map((item, index) => {
    return (
      <ListItem
        text={item.title}
        handleDelete={props.handleDelete}
        handleSelectItem={props.handleSelectItem}
        isSelected={selectedItems.indexOf(item.id) !== -1}
        id={item.id}
      />
    );
  });

  return (
    <Fragment>
      <ul className="todo-list">{itemsList}</ul>
    </Fragment>
  );
};

export default List;
