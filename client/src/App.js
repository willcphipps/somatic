import React from 'react';
// import {Router} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import About from './components/About'
import Cart from './components/Cart';
import Shop from './components/Shop';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as  Router, Route} from 'react-router-dom';




function App() {
  return (
      <Router>
        <Header />
        
          <Route  exact path = "/" component = {Home} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/cart" component = {Cart} />
          <Route exact path = "/shop" component = {Shop} />
        <Footer />
    </Router>
  );
}


export default App;
