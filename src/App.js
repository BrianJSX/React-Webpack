import Layout from "antd/lib/layout/layout";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./scss/app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
