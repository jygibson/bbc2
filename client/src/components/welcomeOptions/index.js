import React, {Component} from 'react';
import './style.css';
import ModalExampleCloseButton from "../authentication";
import { Link } from "react-router-dom";

class Welcome extends Component {
render(){
    return(
        <div className = "welcome">
            <ul>
                <li className="welcome-items"><Link id="search" to={"/search"}>Search</Link></li>
                <li className="welcome-items"> {localStorage.getItem('email') ? <div><Link id="user-options" to={"/user/:id"}> My Favorites</Link></div>: <ModalExampleCloseButton history={this.props.history}/>}</li>
                <li className="welcome-items"> <a id="insta" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/beautybunny_gg/">Instagram</a></li>
            </ul>
        </div>
    )
}

}

export default Welcome;

{/* <ModalExampleCloseButton history={this.props.history}/>
{localStorage.getItem('email') ? <div><Link id="user-options" to={"/"} onClick={this.logout}>Logout</Link><Link id="user-options" to={"/user/:id"}> | My Favorites</Link></div>: <ModalExampleCloseButton />} */}