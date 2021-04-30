import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductLIst/ProductList";
import Details from "./components/Details/Details";
import Default from "./components/Default/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal/Modal";
import Login from "./components/Login/Login";



class App extends Component {
  render() {
  
    return (
      
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/" component={ProductList } />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart } />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
