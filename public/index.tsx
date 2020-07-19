import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./index.scss";
import { ShopRoute } from "../src/routes/shop/shop.route";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Aesop</h1>
      <ShopRoute />
    </div>
  );
};

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
