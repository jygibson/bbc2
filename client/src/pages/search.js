import React,{Component} from 'react';
import { Col, Row, Container } from "../components/grid";
import Wrapper from "../components/wrapper";
import SearchBar from '../components/SearchBar';
import ResultTile from '../components/ResultTile';

class Search extends Component {
    render(){
        return(
            <Container fluid>
            <Wrapper>
            <Row>
                <Col size="md-8">
                     <SearchBar />
                </Col>
            </Row>
            <Row>
            <Col size="md-6" className = "results">
            <ResultTile />
            </Col>
            </Row>
            </Wrapper>
            </Container>
        )
    }
}

export default Search;