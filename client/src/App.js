import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from "./pages/home";
import search from "./pages/search";
import user from "./pages/user";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/search" component={search} />
          <Route exact path="/user/:id" component={user} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
