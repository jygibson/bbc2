import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import TabBuild from './tabs'
import { Link } from "react-router-dom";
import './style.css';

const ModalExampleCloseIcon = (props) => 
{
  console.log("Close Icon props: ", props);
  
 return (
  
  <Modal id='modal'
  trigger={<p id='login'>Login/Sign Up</p>} 
  closeIcon
  show={{ size: "mini", open: true }}
  >
    <Header id='header' icon='heart outline' content='Login/Sign Up' />
    <Modal.Content id='modal-content'>
      
      {<TabBuild history={props.history} />}

    </Modal.Content>

  </Modal>
)

}

export default ModalExampleCloseIcon;
