import React from "react";

// export default class ListItem extends React.Component {
//   handleDelete = (e) => {
//     this.props.handleDelete(this.props.id);
//   };

//   handleSelectItem = () => {
//     this.props.handleSelectItem(this.props.id);
//   };

//   render() {
//     const isSelected = this.props.isSelected;
//     const className = `todo-list-item${
//       isSelected ? " todo-list-item-selected" : ""
//     }`;

//     return (
//       <li className={className} onClick={this.handleSelectItem}>
//         <span className="todo-list-item-title">{this.props.text}</span>
//         <button onClick={this.handleDelete} className="todo-list-remove-btn">
//           Delete me
//         </button>
//       </li>
//     );
//   }
// }

const ListItem = (props) => {
  const isSelected = props.isSelected;
  const className = `todo-list-item${
    isSelected ? " todo-list-item-selected" : ""
  }`;

  const handleSelectItem = () => {
    props.handleSelectItem(props.id);
  };

  const handleDelete = () => {
    props.handleDelete(props.id);
  };

  return (
    <li className={className} onClick={handleSelectItem}>
      <span className="todo-list-item-title">{props.text}</span>
      <button onClick={handleDelete} className="todo-list-remove-btn">
        Delete me
      </button>
    </li>
  );
};

export default ListItem;
