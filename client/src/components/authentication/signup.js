
import React, { Component } from 'react'
// import { Button, Form, Message } from 'semantic-ui-react'
import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  signup = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    const {email, password} = this.state;
    axios.post("/api/signup", { email, password})
      .then((res) => {
   console.log('the res', res.data);
   localStorage.setItem('id', res.data.id)
   localStorage.setItem('email', res.data.email)
   this.props.history.push('/user/'+ res.data.id)
  }).catch((err)=>{
    console.log('there was an error', err)
    document.getElementById("error-message").textContent='Account already exists. Please login.';
  });
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
      <form onSubmit={ this.signup }>
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
      <button type="submit" id='signup'>Sign Up</button>
    </form>
    )
  };
}


export default SignupForm;
