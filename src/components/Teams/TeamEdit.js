import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { updateTeam } from '../../api/teams'
import TeamForm from './TeamForm'

const TeamEdit = ({ user, existingTeam, setTeamUpdated, setShowEditModal }) => {
  const [team, setTeam] = useState(existingTeam)

  const handleChange = event => {
    event.persist()
    setTeam(team => ({ ...team, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    updateTeam(team, user)
      .then(res => {
        setTeamUpdated(true)
      })
      .catch(console.error)

    setShowEditModal(false)
  }

  return (
    <Modal show>
      <TeamForm
        team={team}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={() => setShowEditModal(false)}
      />
    </Modal>
  )
}

export default TeamEdit
