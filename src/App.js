import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Login from "./pages/Login";
import "./scss/style.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
      </Switch>
    </Router>
  );
}
