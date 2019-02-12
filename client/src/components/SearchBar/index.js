import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'
import CardExampleImageCard from '../ResultTile'
import Loading from './loading'
import './style.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: [],
    };
  }

  queryChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value
    });
  };


  search = event => {
    event.preventDefault();

    const { query } = this.state;

    axios({
      method: 'GET',
      url: '/scrape',
      params: { query },
    })
      .then(response => {
        console.log(response.data);
        this.setState({ items: [...response.data] });
        
      })
      .catch(error => { console.log('this is the search bar' , error) });

  };


  render() {
    console.log('the state', this.state);
    return (
      <div className="main">
        <div id="search-bar">
          <Input id="glass"
          icon='search'
          style={{ 
            width: "600px"
           }}
          onChange={this.queryChange}
          onClick={this.search}
          // action={{
          //   color: 'grey',
          //   icon: 'search',
          //   onClick: this.search,
          // }}
          />
        </div>
        <br></br>
        <br></br>
        <div id="result-tiles">
          {
            this.state.items.map((item, key) => (
              <CardExampleImageCard email=
                {localStorage.getItem('email')} key={`${item.title}--${key}`} {...item} />
            ))
          }
        </div>
      </div>
    )
  }
}