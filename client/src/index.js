import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CreateContextProvider from "./utils/CreateContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <CreateContextProvider>
        <App />
      </CreateContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
