import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {Home, About, Navbar, Login, ClubInfo, PageNotFound} from "./components";

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
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
