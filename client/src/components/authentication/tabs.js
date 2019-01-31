import React from 'react'
import { Tab } from 'semantic-ui-react'
import SignupForm from './signup'
import LoginForm from './login'

const panes = [
    { menuItem: 'Signup', render: () => <Tab.Pane> <SignupForm /></Tab.Pane> },
    { menuItem: 'Login', render: () => <Tab.Pane> <LoginForm /></Tab.Pane> },
  ]
  
  const TabBuild = () => <Tab panes={panes} />

  export default TabBuild;