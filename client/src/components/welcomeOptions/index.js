import React, {Component} from 'react';
import './style.css';
import ModalExampleCloseButton from "../authentication";
import { Link } from "react-router-dom";

class Welcome extends Component {
render(){
    return(
        <div className = "welcome">
            <ul>
                <li className="welcome-items"><Link to={"/search"}>Search</Link></li>
                <li className="welcome-items"> <ModalExampleCloseButton /></li>
                <li className="welcome-items"> <Link to="/social">Social</Link></li>
            </ul>
        </div>
    )
}

}

export default Welcome;