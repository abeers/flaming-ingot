import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { fetchOneTeam, deleteTeam } from '../../api/teams'
import TeamUpdate from '../Teams/TeamUpdate'

const Team = ({ match, user }) => {
  const [team, setTeam] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  useEffect(() => {
    fetchOneTeam(match.params.id)
      .then(res => setTeam(res.data.team))
      .catch(console.error)
  }, [match.params.id, deleted, updated])

  const destroy = () => {
    deleteTeam(match.params.id, user)
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!team) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/teams', state: { msg: 'Team successfully deleted!' } }
    } />
  }

  return (
    <Fragment>
      <h4>{team.name}</h4>
      <p>Sigilyph</p>
      {user && user.id === team.user.id && (
        <Fragment>
          <Button onClick={() => setShowUpdateModal(true)}>Update Team</Button>
          <Button variant="secondary" onClick={destroy}>Delete Team</Button>
        </Fragment>
      )}
      <Link to="/teams">Back to all teams</Link>
      {showUpdateModal && (
        <TeamUpdate
          user={user}
          existingTeam={team}
          setUpdated={setUpdated}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </Fragment>
  )
}

export default Team
