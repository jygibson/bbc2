import React,{Component} from 'react';
import { Col, Row, Container } from "../components/grid";
import Welcome from "../components/welcomeOptions";
import Wrapper from "../components/wrapper";

class Index extends Component {
    render(){
        return(
            <Container fluid>
            <Row>
                <Col size="md-6">
                <Wrapper>
                    <Welcome history={this.props.history} />
                </Wrapper>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Index;