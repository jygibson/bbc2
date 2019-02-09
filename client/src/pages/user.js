import React, { Component } from 'react';
import { Col, Row, Container } from "../components/grid";
import Wrapper from "../components/wrapper";
import { Link } from "react-router-dom";
import FavoritesCard from '../components/FavoritesTile'
import axios from 'axios'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.loadFavorites();
    }

    loadFavorites = () => {
        const userEmail = ( localStorage.getItem('email') );
        axios({
            method: 'GET',
            url: '/api/favorite',
            params: {userEmail}
        })
            .then(response => {
                console.log('this is the response', response.data);
                this.setState({ items: [...response.data] });
            })
            .catch(error => { console.log(error) });
    };

    render() {
        return (
            <Container fluid>
                <Wrapper>
                    <Row>
                        <Col size="md-8">
                            <p id="greeting">Hi <span id="useremail"> {localStorage.getItem('email')}</span>! Check out your favorites below.
                            <br></br>
                                <br></br>
                                If you want to start a new search, click <Link to={"/search"}>here</Link></p>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-8">
                            {
                                this.state.items.map((item, key) => (
                                    <FavoritesCard key={`${item.title}--${key}`} {...item} />
                                ))
                            }

                        </Col>
                    </Row>
                </Wrapper>
            </Container >
        )
    }
}
