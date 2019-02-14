import React, {Component} from "react";
import './style.css';
import { BrowserRouter as Router, Link, withRouter } from 'react-router-dom';
import ModalExampleCloseButton from "../authentication";
import axios from 'axios';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  logout = (e) => {
    e.preventDefault();
    console.log('logout was clicked');
    axios.post("/logout")
      .then((res) => {
   console.log('logged out user', res.data);
   localStorage.clear();
   this.props.history.push('/')
  })
  .catch((err)=>console.log('there was an error', err));
}

render(){

return(
  <div>
        <nav className="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="title">
          <p className="nav-header"><Link id="nav-title" to={"/"}> the beauty bunny collective </Link> </p>
        </li>
        <li className="nav-header">
        {localStorage.getItem('email') ? <div><Link id="user-options" to={"/"} onClick={this.logout}>Logout</Link><Link id="user-options" to={"/user/:id"}> | My Favorites</Link></div>: <ModalExampleCloseButton />}
        </li>
      </ul>
    </nav>
  </div>
)
}

  };


export default withRouter(Navbar);