import apiUrl from '../apiConfig'
import axios from 'axios'

export const fetchAllTeams = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/teams'
  })
}

export const createTeam = (team, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/teams',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { team }
  })
}
