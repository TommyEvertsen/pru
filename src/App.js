import "./App.css";

import { Footer } from "./components/Footer";
import NavbarMashi from "./components/header";
import React from "react";
import { Mainpage } from "./pages/Front-page";

function App() {
  return (
    <React.Fragment>
      <NavbarMashi/>
    <Mainpage/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
