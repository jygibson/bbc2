import React from "react";

function SignInForm() {
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
}

var signUpForm = $("form.signup");
var emailInput = $("input.#email-input");
var passwordInput = $("input#password-input");

signUpForm.on("submit",  function(event){
    event.preventDefault();
    var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password){
        return;
    }

    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
});

function signUpUser(email, password){
    $.post("/api/signup", {
        email: email, 
        password: password
    }).then(function(data){
        window.location.replace(data);
    }).catch(handleLoginErr);
}

function handleLoginErr(err){
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
};

export default SignInForm;