import React from "react";
import Form from "../form/form.js"
import Header from "../header/header.js";

class Item extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        words:"this is my amazing application"
      };
  }
  render() {
    return (
    <>
    <Header text= {this.props.title}/>
    <h2>{this.props.text}</h2>
    <h3>{this.state.words}</h3>
    <Form do={this.props.action}/>
    <h4>{this.props.input}</h4>
    </>
    )
  }
}

export default Item;
