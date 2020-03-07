import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/LoginPage/Authentication";
import ClubInfo from "./components/ClubPage/ClubInfo";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/club/:id" component={ClubInfo} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
