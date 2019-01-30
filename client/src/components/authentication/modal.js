import React, {Component} from "react";
import AuthenticationForm from "./login.js";
import SignInForm from "./signup.js";


export default class AuthenticateModal extends Component {
return(
<div class="ui modal">
  <div class="content">
  <div class="ui top attached tabular menu">
  <div class="active item">Login</div>
</div>
<div class="ui bottom attached active tab segment">
<AuthenticationForm />
</div>
  </div>
  <div class="ui top attached tabular menu">
  <div class="active item">Signup</div>
</div>
<div class="ui bottom attached active tab segment">
<SignInForm />
</div>
</div>
</div>
)
}