import React from "react";
import ReactDOM from "react-dom";

import "../design/todo.css";
import App from './app.js';

const Main = () => {
  return <App />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
