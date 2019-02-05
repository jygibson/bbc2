import React, {Component} from 'react'
import {Button, Icon, Input } from 'semantic-ui-react'
import axios from 'axios'
const cheerio= require("cheerio");


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          query: '',
        };
      }

      queryChange = (e) => {
        const { value } = e.target;
        this.setState({
          query: value
        });
      }

    search = (e) => {
        e.preventDefault();
        console.log('query is', this.state.query)
        const { query } = this.state;
        axios({
            method: 'GET',
            url: '/scrape',
            params: { query },
        })
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        });

    }



    render(){
        console.log('the state', this.state);
            return(
            <Input  
            iconPosition='left'
            style={{width:"600px"}} 
            onChange={this.queryChange}
            action={{ 
                color: 'pink', 
                icon: 'search',
                onClick : this.search
             }}
                />
        )
    }
}

// const SearchBar = () => <Input icon='search' style={{width:"600px"}} placeholder='Search...' />

// export default SearchBar