import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import TabBuild from './tabs'

const ModalExampleCloseIcon = () => (
  <Modal trigger={<Button> Login/Sign Up</Button>} closeIcon>
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
