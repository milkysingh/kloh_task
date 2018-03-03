import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ActivityDetail from "./ActivityDetail";
import Home from "./Home";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/activity/:id" component={ActivityDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
