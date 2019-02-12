import React from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './style.css';
import axios from 'axios';



const FavoritesCard = (props) => {
  const { productName, link, productImage, price } = props;


  function deleteFavorite(e) {
    e.preventDefault();
    axios.post("/api/destroy/", { ...props })
      .then((res) => {
        console.log('favorite deleted', res.data);
      })
      .catch((err) => console.log('there was an error: ', err));
  }

  return (
    <div id="favorites-cards">
      <Card
        id="each-favorites-card"
      >
        <Label
          id="label"
          onClick={deleteFavorite} >
          <Icon name='heart' color='pink' />
        </Label>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <Image id='image' src={productImage} />
          <Card.Content id='content'>
            <Card.Header textAlign='center' as={"h5"}>{productName}</Card.Header>
            <Card.Description textAlign='center'as={"h6"}>{price}</Card.Description>
          </Card.Content>
        </a>
      </Card>
    </div>
  );
};


export default FavoritesCard;