import React, { Component } from "react";
import { Card } from 'semantic-ui-react';
// import {response} from '../SearchBar'
import './style.css';

// console.log (response)

const ResultTile = () => (
   
        <Card.Group itemsPerRow={6}>
            <Card 
                className = "results"
                color='pink'
                label={{ as: 'a', corner: 'left', icon: 'heart' }}
                image = "https://cdn.shopify.com/s/files/1/0791/2083/products/Blueberry_Toner_small_e696b44e-cf4d-4750-830c-e2468268fb53_large.jpg?v=1491496164"
                href= "https://www.peachandlily.com/products/blueberry-hydrating-toner"
                header = "Blueberry Hydrating Toner"
                description="$14.49"
            />
        </Card.Group>
        )


export default ResultTile
