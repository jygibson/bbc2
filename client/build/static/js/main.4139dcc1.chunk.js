(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,a){e.exports=a(422)},236:function(e,t,a){},353:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(52),c=a.n(l),o=(a(97),a(17)),i=a(18),s=a(20),u=a(19),m=a(21),d=(a(236),a(428)),h=a(438),p=a(432),f=a(434),g=a(431),E=a(53),b=a(25),v=a.n(b),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).signup=function(e){e.preventDefault(),console.log(a.state.email),console.log(a.state.password);var t=a.state,n=t.email,r=t.password;v.a.post("/api/signup",{email:n,password:r}).then(function(e){console.log("the res",e.data),localStorage.setItem("id",e.data.id),localStorage.setItem("email",e.data.email),a.props.history.push("/user/"+e.data.id)}).catch(function(e){return console.log("there was an error")})},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(E.a)({},r,n))},a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("the state",this.state),r.a.createElement("form",{onSubmit:this.signup},r.a.createElement("input",{label:"Email",id:"email-inputS",name:"email",placeholder:"bunny@beautybunny.com",onChange:this.handleChange}),r.a.createElement("input",{label:"Password",id:"password-inputS",name:"password",placeholder:"password",type:"password",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",id:"signup"},"Sign Up"))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).loginup=function(e){e.preventDefault(),console.log(a.state.email),console.log(a.state.password);var t=a.state,n=t.email,r=t.password;v.a.post("/api/login",{email:n,password:r}).then(function(e){console.log("the res",e.data),localStorage.setItem("id",e.data.id),localStorage.setItem("email",e.data.email),a.props.history.push("/user/"+e.data.id)}).catch(function(e){return console.log("there was an error")})},a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(E.a)({},r,n))},a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("the state",this.state),r.a.createElement("form",{onSubmit:this.loginup},r.a.createElement("input",{label:"Email",id:"email-inputS",name:"email",placeholder:"bunny@beautybunny.com",onChange:this.handleChange}),r.a.createElement("input",{label:"Password",id:"password-inputS",name:"password",placeholder:"password",type:"password",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",id:"login-modal"},"Login"))}}]),t}(n.Component),O=function(e){console.log("this is the tabs props",e.history);var t=[{menuItem:"Signup",render:function(){return r.a.createElement(g.a.Pane,{id:"signup"}," ",r.a.createElement(y,{history:e.history}))}},{menuItem:"Login",render:function(){return r.a.createElement(g.a.Pane,{id:"login-modal"}," ",r.a.createElement(j,{history:e.history}))}}];return r.a.createElement(g.a,{panes:t})},w=(a(353),function(e){return console.log("Close Icon props: ",e),r.a.createElement(p.a,{id:"modal",trigger:r.a.createElement("p",{id:"login"},"Login/Sign Up"),closeIcon:!0,show:{size:"mini",open:!0}},r.a.createElement(f.a,{id:"header",icon:"heart outline",content:"Login/Sign Up"}),r.a.createElement(p.a.Content,{id:"modal-content"},r.a.createElement(O,{history:e.history})))}),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).logout=function(e){e.preventDefault(),console.log("logout was clicked"),v.a.post("/logout").then(function(e){console.log("logged out user",e.data),localStorage.clear(),a.props.history.push("/")}).catch(function(e){return console.log("there was an error",e)})},a.state={isLoggedIn:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"title"},r.a.createElement("p",{className:"nav-header"},r.a.createElement(d.a,{id:"nav-title",to:"/"}," the beauty bunny collective ")," ")),r.a.createElement("li",{className:"nav-header"},localStorage.getItem("email")?r.a.createElement("div",null,r.a.createElement(d.a,{id:"user-options",to:"/",onClick:this.logout},"Logout"),r.a.createElement(d.a,{id:"user-options",to:"/user/:id"}," | My Favorites")):r.a.createElement(w,null)))))}}]),t}(n.Component),C=Object(h.a)(k),S=a(435),I=a(437),N=a(430);function D(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function x(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function q(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(417);var z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement("ul",null,r.a.createElement("li",{className:"welcome-items"},r.a.createElement(d.a,{id:"search",to:"/search"},"Search")),r.a.createElement("li",{className:"welcome-items"}," ",r.a.createElement(w,{history:this.props.history})),r.a.createElement("li",{className:"welcome-items"}," ",r.a.createElement("a",{id:"insta",rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/beautybunny_gg/"},"Instagram"))))}}]),t}(n.Component);a(418);var F=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D,{fluid:!0},r.a.createElement(x,null,r.a.createElement(q,{size:"md-6"},r.a.createElement(F,null,r.a.createElement(z,{history:this.props.history})))))}}]),t}(n.Component),A=a(94),P=a(429),U=a(433),_=a(66),H=a(47),G=a(220),J=(a(419),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).saveFavorite=function(e){e.preventDefault(),1==a.state.firstClick?v.a.post("/api/favorite").then(function(e){console.log(a.state),console.log("favorite saved",e.data),a.setState(function(e){return{active:!e.active,firstClick:!e.firstClick}}),console.log(a.state)}).catch(function(e){return console.log("there was an error: ",e)}):(e.preventDefault(),v.a.post("/api/destroy/").then(function(e){console.log("favorite deleted",e.data),a.setState(function(e){return{active:!e.active,firstClick:!e.firstClick}})}).catch(function(e){return console.log("there was an error: ",e)}))},a.state={active:!1,firstClick:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"cards"},r.a.createElement(U.a,{id:"each-card"},r.a.createElement(_.a,{id:"label",onClick:this.saveFavorite},r.a.createElement(H.a,{id:"heart",color:1==this.state.active?"pink":null,name:"heart"})),r.a.createElement("a",{href:this.props.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(G.a,{id:"image",src:this.props.img}),r.a.createElement(U.a.Content,{id:"content"},r.a.createElement(U.a.Header,{textAlign:"center",as:"h5"},this.props.title),r.a.createElement(U.a.Description,{textAlign:"center",as:"h6"},this.props.price)))))}}]),t}(r.a.Component)),M=(a(420),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).queryChange=function(e){var t=e.target.value;a.setState({query:t})},a.search=function(e){e.preventDefault();var t=a.state.query;v()({method:"GET",url:"/scrape",params:{query:t}}).then(function(e){console.log(e.data),a.setState({items:Object(A.a)(e.data)})}).catch(function(e){console.log("this is the search bar",e)})},a.state={query:"",items:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("the state",this.state),r.a.createElement("div",{className:"main"},r.a.createElement("div",{id:"search-bar"},r.a.createElement(P.a,{id:"glass",icon:"search",style:{width:"600px"},onChange:this.queryChange,onClick:this.search})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{id:"result-tiles"},this.state.items.map(function(e,t){return r.a.createElement(J,Object.assign({email:localStorage.getItem("email"),key:"".concat(e.title,"--").concat(t)},e))})))}}]),t}(n.Component)),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(D,{fluid:!0},r.a.createElement(F,null,r.a.createElement(x,null,r.a.createElement(q,{size:"md-8"},r.a.createElement(M,null)))))}}]),t}(n.Component),B=a(219),K=(a(421),function(e){var t=e.productName,a=e.link,n=e.productImage,l=e.price;return r.a.createElement("div",{id:"favorites-cards"},r.a.createElement(U.a,{id:"each-favorites-card"},r.a.createElement(_.a,{id:"label",onClick:function(t){t.preventDefault(),v.a.post("/api/destroy/",Object(B.a)({},e)).then(function(e){console.log("favorite deleted",e.data)}).catch(function(e){return console.log("there was an error: ",e)})}},r.a.createElement(H.a,{name:"heart",color:"pink"})),r.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(G.a,{id:"image",src:n}),r.a.createElement(U.a.Content,{id:"content"},r.a.createElement(U.a.Header,{textAlign:"center",as:"h5"},t),r.a.createElement(U.a.Description,{textAlign:"center",as:"h6"},l)))))}),Q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).loadFavorites=function(){var e=localStorage.getItem("email");v()({method:"GET",url:"/api/favorite",params:{userEmail:e}}).then(function(e){console.log("this is the response",e.data),a.setState({items:Object(A.a)(e.data)})}).catch(function(e){console.log(e)})},a.state={items:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadFavorites()}},{key:"componentDidUpdate",value:function(){this.loadFavorites()}},{key:"render",value:function(){return r.a.createElement(D,{fluid:!0},r.a.createElement(F,null,r.a.createElement(x,null,r.a.createElement(q,{size:"md-8"},r.a.createElement("p",{id:"greeting"},"Hi ",r.a.createElement("span",{id:"useremail"}," ",localStorage.getItem("email")),"!",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{id:"welcome-div"}," Check out your favorites below.",r.a.createElement("br",null),"If you want to start a new search, click ",r.a.createElement(d.a,{to:"/search"},"here")),r.a.createElement("br",null)))),r.a.createElement("br",null),r.a.createElement(x,null,r.a.createElement(q,{size:"md-8"},this.state.items.map(function(e,t){return r.a.createElement(K,Object.assign({key:"".concat(e.title,"--").concat(t)},e))})))))}}]),t}(n.Component);var R=function(){return r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(I.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:L}),r.a.createElement(N.a,{exact:!0,path:"/search",component:T}),r.a.createElement(N.a,{exact:!0,path:"/user/:id",component:Q}))))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))},97:function(e,t,a){}},[[231,1,2]]]);
//# sourceMappingURL=main.4139dcc1.chunk.js.map