import React, {Component} from "react";
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
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
        <p className="work-please"><Link id="user-options" to={"/"} onClick={this.logout}>Logout</Link><Link id="user-options" to={"/user/:id"}> | My Favorites</Link></p>
        </li>
      </ul>
    </nav>
  </div>
)
}


  };




// function Navbar() {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <ul className="nav">
//         <li className="title">
//           <p className="nav-header"><Link to={"/"}> the beauty bunny collective </Link> </p>
//         </li>
//         <li className="nav-item">
//         <p className="nav-header" id="name"><Link to={"/user/:id"}> {localStorage.getItem('email')}'s favorites </Link></p>
//         </li>
//       </ul>
//     </nav>
//   );
// }

export default withRouter(Navbar);