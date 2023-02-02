import ticketAPI from '../../api'



export const ticketsActions = {
  getTicketsStart: (tickets) => ({
    type: 'GET_TICKETS_START',
    tickets
  } ),

  getTicketsEnd: (tickets) => ({
    type: 'GET_TICKETS_END',
    tickets
  } ),

  getSearchId: (payload) => ({
    type: 'GET_SEARCH_ID',
    payload
  } ),

  errorServer: () => ({
    type: 'ERROR_SERVER'
  } ),

  offLoading: () => ({
    type: 'OFF_LOADING'
  })
}

export const getTicketsStart = (searchId) =>

  async (dispatch) => {
    try {
      const res = await ticketAPI.getTickets(searchId)
      const action = ticketsActions.getTicketsStart(res.data.tickets)
      dispatch(action)

    } catch (e) {
      if (e.response.status === 500) {
        dispatch(getTicketsStart(searchId))
      } else {
        dispatch(ticketsActions.errorServer())
      }
    }
  }

export const getTicketsEnd = (searchId) =>

  async (dispatch) => {
    try {
      const res = await ticketAPI.getTickets(searchId)
      const action = ticketsActions.getTicketsEnd(res.data.tickets)

      if (!res.data.stop) {
        dispatch(action)
      } else {
        dispatch(ticketsActions.offLoading())
      }

    } catch (e) {
      if (e.response.status === 500) {
        dispatch(getTicketsEnd(searchId))
      } else {
        dispatch(ticketsActions.errorServer())
      }
    }
  }

export const getSearchId = () => async (dispatch) => {
  try {
    const res = await ticketAPI.getSearchId()
    dispatch(ticketsActions.getSearchId(res.data.searchId))

  } catch (e) {
    dispatch(ticketsActions.errorServer())
  }
}