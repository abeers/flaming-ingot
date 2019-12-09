import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { fetchAllTeams } from '../../api/teams'
import TeamCreate from '../Teams/TeamCreate'
import TeamCard from '../Teams/TeamCard'

const Teams = ({ user }) => {
  const [teams, setTeams] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [created, setCreated] = useState(false)

  useEffect(() => {
    fetchAllTeams()
      .then(res => setTeams(res.data.teams))
      .catch(console.error)
  }, [created])

  const handleClick = () => {
    setShowCreateModal(true)
  }

  return (
    <Fragment>
      {user && (
        <Button onClick={handleClick}>Create Team</Button>
      )}
      {
        teams
          ? teams.map(team => (
            <TeamCard
              key={team.id}
              team={team}
              user={user}
            />
          ))
          : 'No teams to display'
      }
      {showCreateModal && (
        <TeamCreate
          user={user}
          setCreated={setCreated}
          setShowCreateModal={setShowCreateModal}
        />
      )}
    </Fragment>
  )
}

export default withRouter(Teams)
