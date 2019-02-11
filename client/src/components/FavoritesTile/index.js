import React,{Component} from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import axios from 'axios';

// export default class FavoritesCard extends Component {
//   constructor(props) {
//     super(props);
//     const { productName, link, productImage, price } = props;

//     this.state = {
//       favorite: true,
//     };

//     function deleteFavorite(e) {
//       e.preventDefault();
//       axios.post("/api/destroy/", { ...props })
//         .then((res) => {
//           console.log('favorite deleted', res.data);
//         })
//         .then((res) => {
//           this.setState({
//             favorite: false
//           })
//         })
//         .catch((err) => console.log('there was an error: ', err));
//     }
  
//     return (
//       <div id="cards">
//         <Card
//           id="each-card"
//           color="pink"
//         >
//           <Label
//             id="label"
//             onClick={deleteFavorite} >
//             <Icon name='heart' color='pink' />
//           </Label>
//           <a href={link} rel="noopener noreferrer" target="_blank">
//             <Image src={productImage} />
//             <Card.Content>
//               <Card.Header as={"h4"}>{productName}</Card.Header>
//               <Card.Description>{price}</Card.Description>
//             </Card.Content>
//           </a>
//         </Card>
//       </div>
//     );


//   }


// }



const FavoritesCard = (props) => {
  const { productName, link, productImage, price } = props;


  function deleteFavorite(e) {
    e.preventDefault();
    axios.post("/api/destroy/", { ...props })
      .then((res) => {
        console.log('favorite deleted', res.data);
      })
      // .then((res) => {
      //   componentDidMount(){
        
      //   }
      // })
      .catch((err) => console.log('there was an error: ', err));
  }

  return (
    <div id="cards">
      <Card
        id="each-card"
      >
        <Label
          id="label"
          onClick={deleteFavorite} >
          <Icon name='heart' color='pink' />
        </Label>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <Image src={productImage} />
          <Card.Content>
            <Card.Header as={"h4"}>{productName}</Card.Header>
            <Card.Description>{price}</Card.Description>
          </Card.Content>
        </a>
      </Card>
    </div>
  );
};


export default FavoritesCard;