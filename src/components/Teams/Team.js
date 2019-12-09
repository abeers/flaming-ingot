import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { fetchOneTeam, deleteTeam } from '../../api/teams'
import TeamEdit from '../Teams/TeamEdit'

const Team = (props) => {
  const [team, setTeam] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  useEffect(() => {
    fetchOneTeam(props.match.params.id)
      .then(res => setTeam(res.data.team))
      .catch(console.error)
  }, [props.match.params.id, deleted, updated])

  const destroy = () => {
    deleteTeam(props.match.params.id, props.user)
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
      {props.user && props.user.id === team.user.id && (
        <Fragment>
          <Button onClick={() => setShowEditModal(true)}>Edit Team</Button>
          <Button onClick={destroy}>Delete Team</Button>
        </Fragment>
      )}
      <Link to="/teams">Back to all teams</Link>
      {showEditModal && (
        <TeamEdit
          user={props.user}
          existingTeam={team}
          setTeamUpdated={setUpdated}
          setShowEditModal={setShowEditModal}
        />
      )}
    </Fragment>
  )
}

export default Team
