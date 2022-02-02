import { ListGroup } from 'react-bootstrap';
import { TeamConsumer } from '../../providers/TeamProvider';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const TeamList = ({ teams, grabTeams }) => {

  useEffect( () => {
    grabTeams()
  }, [])

  return(
    <>
      <ListGroup variant='flush' >
        {teams.map( t =>
          <Link to={{
            pathname: `/teams/${t.id}`,
            state: {
              ...t
            }
          }}>
            <ListGroup.Item>{t.name}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

const ConnectedTeamList = (props) => (
  <TeamConsumer>
    { value => <TeamList {...value} {...props}/>}
  </TeamConsumer>
)

export default ConnectedTeamList;
