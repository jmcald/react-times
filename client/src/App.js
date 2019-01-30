import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Searches from "./pages/Searches";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Searches} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;