import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import ModalExampleCloseIcon from './components/authentication';

class App extends Component {
  render() {
    return (
      <div>
<Navbar />
<ModalExampleCloseIcon />
      </div>
    );
  }
}

export default App;
