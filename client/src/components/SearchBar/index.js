import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          query: '',
        };
      }

      queryChange = (e) => {
        const { query, value } = e.target;
        this.setState({
          query: value
        });
      }

    search = (e) => {
        e.preventDefault();

    }



    render(){
        console.log('the state', this.state);
            return(
            <Input 
            icon='search' 
            style={{width:"600px"}} 
            placeholder='Search...'
            onChange={this.queryChange} />
        )
    }
}

// const SearchBar = () => <Input icon='search' style={{width:"600px"}} placeholder='Search...' />

// export default SearchBar