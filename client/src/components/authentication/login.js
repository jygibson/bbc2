
import React from "react";

function AuthenticationForm() {
    return(
        $('.ui.form')
        .form({
          fields: {
           email: 'empty',
           password: ['min length[6]', 'empty']
          }
        }),
      if( $('.ui.form').form('is valid')) {
        // form is valid (both email and name)
      }
    )
};

function Authenticate(){
    //grabbing the form data and validating there is actually shit in it
    var loginForm = $("form.login");
    var emailInput= $("input#email-input");
    var passwordInput = $("input#password-input");

    loginForm.on("submit", function(event){
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
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data){
            window.location.replace(data);
        }).catch(function(err){
            console.log(err);
        });
    };
};

export default AuthenticationForm;