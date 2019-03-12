import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Nav from "./Nav";
import Main from "./Main";
import Resume from "./Resume";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="nav"> */}
          <Nav />
        {/* </div> */}
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
