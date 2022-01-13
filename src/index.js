import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body{
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    background-color: #444c5ca1
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
