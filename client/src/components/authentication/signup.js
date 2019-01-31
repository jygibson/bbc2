
import React, { Component } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

var axios = require('axios');

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
    console.log('the button was clicked');
    console.log(this.state.email);
    console.log(this.state.password);
    const {email, password} = this.state;
    axios.post("/api/signup", { email, password})
      .then((res) => {
   console.log('the res', res.data);
  }).catch((err)=>console.log(err.responseJSON));
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
      <Form success>
      <Form.Input 
        label='Email'
        id='email-inputS'
        name='email'
        placeholder='bunny@beautybunny.com'
        onChange={ this.handleChange}
      />
      <Form.Input 
        label='Password' 
        id="password-inputS"
        name='password' 
        placeholder='password' 
        onChange={this.handleChange}
        />
      <Button id="signup" onClick={this.signup}>Sign Up</Button>
      <Message success header='Form Completed' content="You're all signed up" />
    </Form>
    )
  };
}


export default SignupForm;

// function SignUp(){

// var signUpForm = document.querySelector("#signup");
// var emailInput = document.getElementById("#email-inputS");
// var passwordInput = document.getElementById("#password-inputS");

//  signUpForm.addEventListener("click", function (event) {
//     event.preventDefault();
//     var userData = {
//         email: emailInput.val().trim(),
//         password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//         return;
//     }

//     signUpUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
// });
// }

// function signUpUser(email, password) {
//     axios.post("/api/signup", {
//         email: email,
//         password: password
//     }).then(function (data) {
//         window.location.replace(data);
//     }).catch(handleLoginErr);
// }


// function handleLoginErr(err) {
//     alert(err.responseJSON);
//     alert.fadeIn(500);
// };

// export default SignInForm;