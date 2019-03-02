import React from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './style.css';
import axios from 'axios';

//revamped code for demo day, controls heart icon
class CardExampleImageCard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      active: false,
      firstClick: true
    };
  };

  
    saveFavorite=(e)=> {
      e.preventDefault();
      if (this.state.firstClick == true){
      axios.post("/api/favorite")
      .then((res) => {
        console.log(this.state)
        console.log('favorite saved', res.data);
        this.setState(prevState => ({
          active: !prevState.active,
          firstClick: !prevState.firstClick
        }));
        console.log(this.state)
      })
      .catch((err) => console.log('there was an error: ', err));
    } else {
      e.preventDefault();
      axios.post("/api/destroy/")
        .then((res) => {
          console.log('favorite deleted', res.data);
          this.setState(prevState => ({
            active: !prevState.active,
            firstClick: !prevState.firstClick
          }));
        })
        .catch((err) => console.log('there was an error: ', err));
    }
    };

  render(){
    return (
      <div id="cards">
        <Card 
          id="each-card"
          >
          <Label id="label"
            onClick={this.saveFavorite}>
            <Icon id="heart" 
            color={this.state.active == true ? 'pink': null}           
            name='heart'
             />
          </Label>
          <a href={this.props.link} rel="noopener noreferrer" target="_blank">
            <Image id='image' src={this.props.img} />
            <Card.Content id='content'>
              <Card.Header textAlign='center' as={"h5"}>{this.props.title}</Card.Header>
              <Card.Description textAlign='center'as={"h6"}>{this.props.price}</Card.Description>
            </Card.Content>
          </a>
        </Card>
      </div>
    );
  }
}



  export default CardExampleImageCard;


//original project code that didn't control the heart icon, was a stateless component
// const CardExampleImageCard = (props) => {
//   const { title, link, img, price } = props;



//   function saveFavorite(e) {
//     e.preventDefault();
//     axios.post("/api/favorite", { ...props })
//     .then((res) => {
//       console.log('favorite saved', res.data);
//     })
//     .catch((err) => console.log('there was an error: ', err));
//   };
 

//     return (
//       <div id="cards">
//         <Card 
//           id="each-card"
//           >
//           <Label id="label"
//             onClick={saveFavorite}>
//             <Icon id="heart"            
//             name='heart'
//              />
//           </Label>
//           <a href={link} rel="noopener noreferrer" target="_blank">
//             <Image id='image' src={img} />
//             <Card.Content id='content'>
//               <Card.Header textAlign='center' as={"h5"}>{title}</Card.Header>
//               <Card.Description textAlign='center'as={"h6"}>{price}</Card.Description>
//             </Card.Content>
//           </a>
//         </Card>
//       </div>
//     );
//   };


//   export default CardExampleImageCard;
