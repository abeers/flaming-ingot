import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { fetchAllTeams } from '../../api/teams'

const Teams = (props) => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetchAllTeams()
      .then((res) => {
        console.log(res)
        setTeams(res.data.teams)
      })
      .catch(console.error)
  }, [])

  return (
    <Fragment>
      {
        teams
          ? teams.map(team => (
            <div key={team.id}>{team.name}</div>
          ))
          : 'No teams to display'
      }
    </Fragment>
  )
}

export default withRouter(Teams)
