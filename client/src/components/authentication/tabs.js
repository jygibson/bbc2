import React from 'react'
import { Tab } from 'semantic-ui-react'
import SignupForm from './signup'
import LoginForm from './login'

// const panes = [
//     { menuItem: 'Signup', render: () => <Tab.Pane> <SignupForm /></Tab.Pane> },
//     { menuItem: 'Login', render: () => <Tab.Pane> <LoginForm history={this.props.history} /></Tab.Pane> },
//   ]
  
  const TabBuild = (props) => {

    console.log("this is the tabs props" , props.history)
    const panes = [
      { menuItem: 'Signup', render: () => <Tab.Pane> <SignupForm /></Tab.Pane> },
      { menuItem: 'Login', render: () => <Tab.Pane> <LoginForm history={props.history} /></Tab.Pane> },
    ]

    return <Tab panes={panes} />
  }

  export default TabBuild;