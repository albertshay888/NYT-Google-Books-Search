import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Resumes from "./pages/Resumes";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Resumes} />
          <Route exact path="/resumes" component={Resumes} />

          <Route exact path="/resumes/:id" component={Detail} />
        
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
