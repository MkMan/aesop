import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./style.scss";

const App = () => <div>Hello World</div>;

const appContainer = document.getElementById("app-container");
ReactDOM.render(<App />, appContainer);
