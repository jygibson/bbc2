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
    const {email, password} = this.state;
    axios.post("/logout", { email, password})
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
          <p className="nav-header"><Link to={"/"}> the beauty bunny collective </Link> </p>
        </li>
        <li className="nav-item"><Link to={"/"} onClick={this.logout}>Logout</Link><Link to={"/user/:id"}> | My Favorites</Link></li>
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