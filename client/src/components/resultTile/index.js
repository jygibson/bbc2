import React from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './style.css';
import axios from 'axios';


const CardExampleImageCard = (props) => {
  const { title, link, img, price } = props;

   saveFavorite = (e) => {
    e.preventDefault();
    axios.post("https://localhost:5000/api/favorite",  { props })
      .then((res) => {
        console.log('favorite saved', res.data);
        <Label><Icon name='heart' color='pink' /></Label>
      }).catch((err) => console.log('there was an error: ', err));
    }

    return (
      <div id="cards">
        <Card color="pink">
          <Label
            onClick={this.saveFavorite}>
            <Icon name='heart' />
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
