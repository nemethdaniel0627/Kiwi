import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./css/styles.scss";
// import "./css/popup.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
      </Switch>

    </Router>
  );
}

export default App;
