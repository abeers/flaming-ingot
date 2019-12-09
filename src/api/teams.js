import apiUrl from '../apiConfig'
import axios from 'axios'

export const fetchAllTeams = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/teams'
  })
}

export const fetchOneTeam = (id) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/teams/${id}`
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

export const updateTeam = (team, user) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/teams/${team.id}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { team }
  })
}

export const deleteTeam = (id, user) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/teams/${id}`,
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
