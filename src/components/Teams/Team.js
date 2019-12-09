import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { fetchOneTeam, deleteTeam } from '../../api/teams'

const Team = (props) => {
  const [team, setTeam] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    fetchOneTeam(props.match.params.id)
      .then(res => setTeam(res.data.team))
      .catch(console.error)
  }, [props])

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
        <button onClick={destroy}>Delete Team</button>
      )}
      <Link to="/teams">Back to all teams</Link>
    </Fragment>
  )
}

export default Team
