// import modules
import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import components
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
