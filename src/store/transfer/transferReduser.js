
const initialState = [
  {
    label: 'Все',
    id: 10,
    status: true,
  },
  {
    label: 'Без пересадок',
    id: 0,
    status: true,
  },
  {
    label: '1 пересадка',
    id: 1,
    status: true,
  },
  {
    label: '2 пересадки',
    id: 2,
    status: true,
  },
  {
    label: '3 пересадки',
    id: 3,
    status: true,
  },
]

export const transferFilterReducer = (state = initialState, action) => {
  // console.log(action)  // id: 0, 1, 10...
  switch (action.type) {
  case 'CHANGE_FILTER': {
    const filterAllStatus = state.find((i) => i.id === 10)?.status
    // console.log(filterAllStatus) // true  false
    if (action.id === 10 && filterAllStatus) {
      return state.map((i) => {
        i.status = false
        return i
      })
    }

    if (action.id === 10) {
      return state.map((i) => {
        i.status = true
        return i
      })
    }

    return state.map((i) => {
      if (i.id === action.id) {
        const paramsAll = state.find((i) => i.id === 10)
        if(paramsAll) paramsAll.status = false
        i.status = !i.status
      }
      return i
    })
  }
  default:
    return state
            
  }
}