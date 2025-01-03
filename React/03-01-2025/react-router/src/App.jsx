// import React from 'react';

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";

function App() {
  return (
    <Router>
      <div>
        <h1 className="bg-black text-white p-4 mb-4 rounded">React-Router </h1>
        <nav className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
