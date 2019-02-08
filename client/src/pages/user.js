import React, { Component } from 'react';
import { Col, Row, Container } from "../components/grid";
import Wrapper from "../components/wrapper";

export default class User extends Component {

    render() {
        return (
            <Container fluid>
                <Wrapper>
                    <Row>
                        <Col size="md-8">
                            <h3>Hi, {this.User.email}! Check out your favorites below</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col size = "md-8">
                        <div id="user-favs">
                        
                        </div>
                        </Col>
                    </Row>
                </Wrapper>
            </Container>
        )
    }
}
