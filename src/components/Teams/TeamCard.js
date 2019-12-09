import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const TeamCard = ({ team, user }) => {
  return (
    <Link className="m-1" to={`/teams/${team.id}`}>
      <Card className="p-3">
        <Card.Title>{team.name}</Card.Title>
        {user && user.id === team.user.id && (
          <Card.Subtitle>My Team!</Card.Subtitle>
        )}
        <Card.Text>This team is super special, just like all the others!</Card.Text>
      </Card>
    </Link>
  )
}

export default TeamCard
