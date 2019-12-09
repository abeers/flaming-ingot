import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { updateTeam } from '../../api/teams'
import TeamForm from './TeamForm'

const TeamUpdate = ({ user, existingTeam, setUpdated, setShowUpdateModal }) => {
  const [team, setTeam] = useState(existingTeam)

  const handleChange = event => {
    event.persist()
    setTeam(team => ({ ...team, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    updateTeam(team, user)
      .then(res => {
        setUpdated(true)
      })
      .catch(console.error)

    setShowUpdateModal(false)
  }

  return (
    <Modal show>
      <TeamForm
        team={team}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={() => setShowUpdateModal(false)}
      />
    </Modal>
  )
}

export default TeamUpdate
