import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import axios from 'axios'
import CardExampleImageCard from '../ResultTile'
import Loading from './loading'

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
      .catch(error => { console.log(error) });

  };



  render() {
    console.log('the state', this.state);
    return (
      <div>
        <Input
          iconPosition='left'
          style={{ width: "600px" }}
          onChange={this.queryChange}
          action={{
            color: 'pink',
            icon: 'search',
            onClick: this.search
          }}
        />
        <br></br>
        <br></br>
        {
          this.state.items.map((item, key) => (
            <CardExampleImageCard email=
              {localStorage.getItem('email')} key={`${item.title}--${key}`} {...item} />
          ))
        }
      </div>
    )
  }
}