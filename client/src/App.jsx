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
        <Link to="/create-post">
          <input id="create-post" type="button" value="Create Post" />
        </Link>
      </header>
      <main className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
