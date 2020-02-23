import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}

export default App;
