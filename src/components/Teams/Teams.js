import React, { useState, useEffect, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { fetchAllTeams } from '../../api/teams'
import TeamCreate from '../Teams/TeamCreate'

const Teams = ({ user }) => {
  const [teams, setTeams] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [teamCreated, setTeamCreated] = useState(false)

  useEffect(() => {
    fetchAllTeams()
      .then((res) => {
        setTeams(res.data.teams)
      })
      .catch(console.error)
  }, [teamCreated])

  const handleClick = () => {
    setShowCreateModal(true)
  }

  return (
    <Fragment>
      {user && (
        <Fragment>
          <Button onClick={handleClick}>Create Team</Button>
          {showCreateModal && (
            <TeamCreate
              user={user}
              setTeamCreated={setTeamCreated}
              setShowCreateModal={setShowCreateModal}
            />
          )}
        </Fragment>
      )}
      {
        teams
          ? teams.map(team => (
            <p key={team.id}>
              <Link to={`/teams/${team.id}`}>{team.name}</Link>
            </p>
          ))
          : 'No teams to display'
      }
    </Fragment>
  )
}

export default withRouter(Teams)
