import React from "react";
import './style.css';
import { Link } from "react-router-dom";

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     }
//   }

//   loggedIn = (req, res, next) => {
//     if (req.user) {
//       return (
//         <Link to={"/logout"}>Logout</Link>
//         )
//     } else {
//       return (
//         <Link to={"/search"}>Sign In/Create Account</Link>
//         )
//     }
// }

// componentDidMount() {
//   this.loggedIn();
// }

// render(){
// return(
//   <div>
//         <nav className="navbar navbar-dark bg-dark">
//       <ul className="nav">
//         <li className="title">
//           <p className="nav-header"><Link to={"/"}> the beauty bunny collective </Link> </p>
//         </li>
//         <li className="nav-item"><p id="login"></p></li>
//       </ul>
//     </nav>
//   </div>
// )
// }


//   };



function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav">
        <li className="title">
          <p className="nav-header"><Link to={"/"}> the beauty bunny collective </Link> </p>
        </li>
        <li className="nav-item">
        <p className="nav-header" id="name"><Link to={"/user/:id"}> {localStorage.getItem('email')}'s favorites </Link></p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;