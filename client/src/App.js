import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from "./pages/home";
import search from "./pages/search";
import user from "./pages/user";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/search" component={search} />
          <Route exact path="/user/:id" component={user} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
