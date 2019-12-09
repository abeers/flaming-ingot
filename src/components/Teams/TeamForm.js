import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const TeamForm = ({ team, handleSubmit, handleChange, handleCancel }) => (
  <Form className="p-3" onSubmit={handleSubmit}>
    <Form.Label>Name</Form.Label>
    <Form.Control
      className="mb-1"
      placeholder="The Very Best"
      value={team.name}
      name="name"
      onChange={handleChange}
    />

    <Button type="submit">Submit</Button>
    <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
  </Form>
)

export default TeamForm
