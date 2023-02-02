
const initialState = {
  sortTabs: [
    {label: 'cамый дешевый', id: 'cheapest'},
    {label: 'самый быстрый', id: 'fastest'},
    {label: 'оптимальный', id: 'optimal'},
  ] ,
  activeSortTab: 'cheapest',
}


export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_SORT_ID':
    return {...state, activeSortTab: action.sortId}
  default:
    return state
  }
}