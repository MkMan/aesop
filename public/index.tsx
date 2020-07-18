import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./index.scss";
import { Accordion } from "../src/components/accordion/accordion.component";
import { AccordionChild } from "../src/components/accordion/accordion.types";

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

  const accordionChildren: AccordionChild[] = [
    {
      title: "Product 1",
      body:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ",
    },
    {
      title: "Product 2",
      body:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ",
    },
    {
      title: "Product 3",
      body: (
        <Accordion
          groupName="sub group"
          children={[{ title: "Product 3 - 1", body: "Hello there" }]}
        />
      ),
    },
  ];

  return (
    <div className="app">
      <h1 className="title">Aesop</h1>
      <Accordion children={accordionChildren} groupName="root" />
    </div>
  );
};

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
