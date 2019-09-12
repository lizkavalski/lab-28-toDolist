import React from "react";

import Item from "./componets/item/item.js";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      todoList:[],
    }
  }
  sayIt=(string)=>{
    this.setState({input:string})
  }

  render() {
    return (
      <Item
      title='this is my title'
       action ={this.sayIt}
       input={this.state.input}
       />

    );
  }
}
export default App;
