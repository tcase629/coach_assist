import { useState, useEffect } from 'react';
import { TeamConsumer } from '../../providers/TeamProvider';

const TeamForm = ({ addTeam, name, id, updateTeam }) => {
  const [team, setTeam] = useState({ name: "" })

  useEffect( () => {
    if (id) {
      setTeam({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTeam(id, team)
    } else {
      addTeam(team)
    }
    setTeam({ name: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={team.name} 
          onChange={(e) => setTeam({ ...team, name: e.target.value })}
          required
          placeholder="Team Name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const ConnectedTeamForm = (props) => (
  <TeamConsumer>
    { value => <TeamForm {...props} {...value} />}
  </TeamConsumer>
)


export default ConnectedTeamForm;