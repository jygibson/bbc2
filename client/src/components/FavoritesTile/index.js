import React from "react";
import { Card, Image, Label, Icon } from 'semantic-ui-react';
import './style.css';


const FavoritesCard = (props) => {
  const { productName, link, productImage, price } = props;

    return (
      <div id="cards">
        <Card 
          id="each-card" 
          color ="pink"
          >
          <Label id="label">
            <Icon name='heart' />
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