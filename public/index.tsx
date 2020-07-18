import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./index.scss";
import { Accordion } from "../src/components/accordion/accordion.component";

const App = () => {
  axios
    .get("//localhost:3000/nav/shop")
    .then((response) => {
      // handle success
      console.log("Success", response);
    })
    .catch((error) => {
      // handle error
      console.log("Error", error);
    });

  return (
    <div className="app">
      <h1 className="title">Aesop</h1>
      <Accordion children={[1, 2, 45]} groupName="root" />
    </div>
  );
};

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
