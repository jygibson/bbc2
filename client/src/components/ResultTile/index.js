import React from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './style.css';
import axios from 'axios';



const CardExampleImageCard = (props) => {
  const { title, link, img, price } = props;



  function saveFavorite(e) {
    e.preventDefault();
    axios.post("/api/favorite", { ...props })
    .then((res) => {
      console.log('favorite saved', res.data);
    })
    .catch((err) => console.log('there was an error: ', err));
  };
 

    return (
      <div id="cards">
        <Card 
          id="each-card"
          >
          <Label id="label"
            onClick={saveFavorite}>
            <Icon id="heart"            
            name='heart'
             />
          </Label>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <Image id='image' src={img} />
            <Card.Content id='content'>
              <Card.Header textAlign='center' as={"h5"}>{title}</Card.Header>
              <Card.Description textAlign='center'as={"h6"}>{price}</Card.Description>
            </Card.Content>
          </a>
        </Card>
      </div>
    );
  };


  export default CardExampleImageCard;