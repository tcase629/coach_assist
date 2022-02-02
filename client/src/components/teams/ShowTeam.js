import { TeamConsumer } from "../../providers/TeamProvider";
import { useState } from 'react';
import TeamForm from './TeamForm';
import { Modal, Button } from 'react-bootstrap';
import Players from '../players/Players';

const ShowTeam = ({ location, deleteTeam }) => {
  const [open, setOpen] = useState(false)

  const { id, name } = location.state
  return (
    <>  
      <h1>{name}</h1>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        backdrop="static"
        keyboard={false}
        trigger={<Button color="yellow">Edit</Button>}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editing {name} Team</Modal.Title> 
        </Modal.Header>
          <Modal.Body>
            <TeamForm 
              id={id}
              name={name}
            />
          </Modal.Body>
        <Modal.Footer>
          <Button color='yellow' onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Button color="red" onClick={() => deleteTeam(id)}>
        Delete
      </Button>
      <Players teamId={id} />
    </>
  )
}

const ConnectedShowTeam = (props) => (
  <TeamConsumer>
    { value => <ShowTeam {...props} {...value} />}
  </TeamConsumer>
)

export default ConnectedShowTeam;