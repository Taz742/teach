import React from "react";
import NumberList from "./evens";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ["BMW", "Mercedes", "Audi", "Opel", "KIA"],
      oddNumbers: [1, 3, 5],
      evenNumbers: [0, 2, 4],
      newCarTitle: "",
    };
  }

  handleCarNameChange = (e) => {
    this.setState({
      newCarTitle: e.target.value,
    });
  };

  handleButtonClick = () => {
    let newCarTitle = this.state.newCarTitle;
    let cars = this.state.cars;

    if (newCarTitle !== "") {
      cars.push(newCarTitle);

      this.setState({
        cars: cars,
        newCarTitle: "",
      });
    } else {
      console.log("you provide empty string");
    }
  };

  render() {
    const cars = this.state.cars.map(function (value, index) {
      return <li>{value}</li>;
    });

    return (
      <React.Fragment>
        <input
          name="newCarTitle"
          placeholder="Enter new car title"
          value={this.state.newCarTitle}
          onChange={this.handleCarNameChange}
        />
        <button onClick={this.handleButtonClick}>Add New Card</button>
        <br />
        <ul>{cars}</ul>
        <NumberList title="Even Number List" numbers={[0, 2, 4, 6, 8]} />
        <NumberList title="Odd Number List" numbers={[1, 3, 5, 7, 9]} />
      </React.Fragment>
    );
  }
}

export default App;
