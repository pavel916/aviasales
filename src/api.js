import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy',
  headers: {
    'Content-Type': 'application/json',
  },
})



const ticketAPI = {
  getSearchId() {
    return instance
      .get('search')
  },
  getTickets(searchId) {
    return instance
      .get(`tickets?searchId=${searchId}`)
  },
}

export default ticketAPI
