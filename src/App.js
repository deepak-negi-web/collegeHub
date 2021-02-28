import React, { useState } from "react";
import { Header, Main, Sidebar } from "./sections";
import { Backdrop } from "./components";
import "./style.css";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <div className="app">
      <Header open={toggleSidebar} />
      <Sidebar open={sidebar} close={closeSidebar} />
      <Backdrop show={sidebar} />
      <Main />
    </div>
  );
}

export default App;
