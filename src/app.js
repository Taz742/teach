import React, { Fragment } from "react";
import TodoList from "./todo-list";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <TodoList />
//       </React.Fragment>
//     );
//   }
// }

// export default App;

const App = () => {
  return (
    <Fragment>
      <TodoList />
    </Fragment>
  );
};

export default App;
