import React from 'react'
import { Icon, Button, Header, Modal } from 'semantic-ui-react'
import TabBuild from './tabs'

const ModalExampleCloseIcon = () => (
  <Modal 
  trigger={<Button basic color='purple' content='Login/Signup' />} 
  closeIcon
  show={{ size: "mini", open: true }}
  >
    <Header icon='coffee' content='Login/Sign Up' />
    <Modal.Content>
      
      {<TabBuild />}

    </Modal.Content>
    {/* <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions> */}
  </Modal>
)


export default ModalExampleCloseIcon;
