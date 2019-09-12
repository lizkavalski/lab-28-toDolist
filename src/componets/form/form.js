import React from "react";

class Form extends React.Component {
  handler = e => {
    e.preventDefault();
  };
  onCapture = e => {
    let current = e.target.value;
    this.props.do(current);
  };

  render() {
    return (
      <form onSubmit={this.handler}>
        <input onChange={this.onCapture} />
      </form>
    );
  }
}

export default Form;

