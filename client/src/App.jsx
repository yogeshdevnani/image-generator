import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import "./App.css";
import "./image-generator.css";

import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="navbar">
        <Link to="/">
          <img id="main-logo" src={logo} alt="logo" />
        </Link>
        <Link to="/createpost"></Link>
      </header>
    </BrowserRouter>
  );
};

export default App;
