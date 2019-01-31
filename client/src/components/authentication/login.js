
import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
var axios = require('axios');

const LoginForm = () => (
  <Form success>
    <Form.Input label='Email' id='email-inputL' placeholder='bunny@beautybunny.com' />
    <Form.Input label='Password' id="password-inputL" placeholder='password' />
    <Button id="login" onClick={Authenticate}>Login</Button>
    <Message success header='Form Completed' content="You're logged in!" />
  </Form>
)

export default LoginForm;

function Authenticate(){
    //grabbing the form data and validating there is actually shit in it
    var loginForm = document.getElementById("#login");
    var emailInput= document.getElementById("#email-inputL");
    var passwordInput = document.getElementById("#password-inputL");

    loginForm.addEventListener("click", function(event){
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password){
            return;
        }

        //if there is an email and password we run the loginUser function and then clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    function loginUser(email, password){
        axios.post("/api/login", {
            email: email,
            password: password
        }).then(function(data){
            window.location.replace(data);
        }).catch(function(err){
            console.log(err);
        });
    };
};

// export default AuthenticationForm;