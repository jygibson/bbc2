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
                <li className="welcome-items"> <ModalExampleCloseButton history={this.props.history}/></li>
                <li className="welcome-items"> <a id="insta" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/beautybunny_gg/">Instagram</a></li>
            </ul>
        </div>
    )
}

}

export default Welcome;