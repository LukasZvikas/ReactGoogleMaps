import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MapRenderer from "./MapRenderer";
import RouteList from "./RouteList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/route" component={MapRenderer} />
          <Route exact path="/routelist" component={RouteList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
