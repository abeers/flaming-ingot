import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

import { createTeam } from '../../api/teams'
import TeamForm from './TeamForm'

const TeamCreate = ({ user, setCreated, setShowCreateModal }) => {
  const [team, setTeam] = useState({ name: '' })
  const [createdTeamId, setCreatedTeamId] = useState(null)

  const handleChange = event => {
    event.persist()
    setTeam(team => ({ ...team, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    createTeam(team, user)
      .then(res => {
        setCreatedTeamId(res.data.team.id)
        setCreated(true)
      })
      .catch(console.error)

    setShowCreateModal(false)
  }

  if (createdTeamId) {
    return <Redirect to={`/teams/${createdTeamId}`} />
  }

  return (
    <Modal show>
      <TeamForm
        team={team}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={() => setShowCreateModal(false)}
      />
    </Modal>
  )
}

export default TeamCreate
