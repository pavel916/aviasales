

const initialState = {
  ticketsStart: [] ,
  ticketsEnd: [] ,
  searchId: '',
  isLoad: true,
  isError: false,
}


export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_TICKETS_START':
    return {
      ...state, ticketsStart: action.tickets,
    }
  case 'GET_TICKETS_END':
    return {
      ...state, ticketsEnd: [...state.ticketsEnd, ...action.tickets],
    }
  case 'GET_SEARCH_ID':
    return { ...state, searchId: action.payload }
  case 'OFF_LOADING':
    return { ...state, isLoad: false}
  case 'ERROR_SERVER':
    return { ...state, isError: true, isLoad: false }
  default:
    return state
  }
}