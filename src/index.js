import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { DataProvider, CollegeProvider } from "./Providers";
ReactDOM.render(
  <DataProvider>
    <CollegeProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </CollegeProvider>
  </DataProvider>,
  document.getElementById("root")
);
