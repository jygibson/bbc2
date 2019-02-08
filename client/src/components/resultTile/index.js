import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react';
import SearchBar from '../SearchBar';
import './style.css';



const CardExampleImageCard = () => (
  <Card>
    <Image src= '' />
    <Card.Content>
      <Card.Header>{}</Card.Header>
      <Card.Meta>{}</Card.Meta>
      <Card.Description>{}</Card.Description>
    </Card.Content>
  </Card>
);

export default CardExampleImageCard
