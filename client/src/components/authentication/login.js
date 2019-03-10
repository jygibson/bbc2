
import React, { Component } from 'react'
// import { Button, Form, Message } from 'semantic-ui-react'

import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  loginup = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    const {email, password} = this.state;
    axios.post("/api/login", { email, password})
      .then((res) => {
   console.log('the res', res.data);
   localStorage.setItem('id', res.data.id)
   localStorage.setItem('email', res.data.email)
   console.log('the props history on login.js', this.props.history)
   this.props.history.push('/user/'+ res.data.id)   

  }).catch((err)=>console.log('there was an error'));
}



  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log('the state', this.state);
    return (
      <form onSubmit={ this.loginup }>
        <input 
        label='Email'
        id='email-inputS'
        name='email'
        placeholder='bunny@beautybunny.com'
        onChange={ this.handleChange}
      />
      <input 
        label='Password' 
        id="password-inputS"
        name='password' 
        placeholder='password'
        type='password' 
        onChange={this.handleChange}
        />
      <button type="submit" id='login-modal'>Login</button>
    </form>
    )
  };
}


export default LoginForm;