import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const TeamContext = React.createContext()
export const TeamConsumer = TeamContext.Consumer

const TeamProvider = ({ children }) => {
  const [teams, setTeams] = useState([])

  const navigate = useNavigate();

  const grabTeams = () => {
    axios.get('/api/teams')
      .then( res => setTeams(res.data) )
      .catch( err => console.log(err))
  }

  const addTeam = (team) => {
    axios.post('/api/teams', { team })
      .then( res => {
        setTeams([...teams, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateTeam = (id, team) => {
    axios.put(`/api/teams/${id}`, { team })
      .then(res => {
        const updatedTeams = teams.map( t => {
          if (t.id == id) {
            return res.data 
          }
          return t
        })
        setTeams(updatedTeams)
        navigate('/teams') 
      })
      .catch( err => console.log(err))
  }

  const deleteTeam = (id) => {
    axios.delete(`/api/teams/${id}`)
      .then(res => {
        setTeams(teams.filter( t => t.id !== id))
        navigate('/teams')
      })
      .catch( err => console.log(err))
  }

  return (
    <TeamContext.Provider value={{
      teams,
      grabTeams: grabTeams,
      addTeam: addTeam,
      updateTeam: updateTeam,
      deleteTeam: deleteTeam,
    }}>
      { children }
    </TeamContext.Provider>
  )
}

export default TeamProvider;