import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

const App = () => <div>Hello World</div>;

const appContainer = document.getElementById("app-container");
ReactDOM.render(<App />, appContainer);
