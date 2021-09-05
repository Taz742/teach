import React from "react";

class NumberList extends React.Component {
  render() {
    const evens = this.props.numbers.map(function (value, index) {
      return <li>{value}</li>;
    });

    return (
      <>
        {this.props.title}
        <ul>{evens}</ul>
      </>
    );
  }
}

export default NumberList;
