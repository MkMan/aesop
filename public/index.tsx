import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./index.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Aesop</h1>
    </div>
  );
};

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
