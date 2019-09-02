import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Task from "./Components/Pages/Task";
import "./Assets/css/bootstrap.min.css";
import "./Assets/fonts/fontawesome/css/all.css";
import "./Assets/css/style.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/todo" exact component={Task} />
        </Switch>
      </BrowserRouter>
    )
  }
}
