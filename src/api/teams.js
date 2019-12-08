import apiUrl from '../apiConfig'
import axios from 'axios'

export const fetchAllTeams = credentials => {
  return axios({
    method: 'GET',
    url: apiUrl + '/teams'
  })
}
