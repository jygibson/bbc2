import React, {Component} from "react";
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

function renderIcon() {
  console.log('clicked to save favorite')
    return (
      <Icon name='heart' color='pink'/>
    )
}

    return (
      <div id="cards">
        <Card 
          id="each-card" 
          >
          <Label id="label"
            onClick={saveFavorite}>
            <Icon 
            name='heart'
            onClick={renderIcon}
             />
          </Label>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <Image src={img} />
            <Card.Content>
              <Card.Header as={"h4"}>{title}</Card.Header>
              <Card.Description>{price}</Card.Description>
            </Card.Content>
          </a>
        </Card>
      </div>
    );
  };


  export default CardExampleImageCard;
