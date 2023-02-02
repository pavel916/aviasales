export const filterActions = {
  changeFilter: (id = 10) => (
    {
      type: 'CHANGE_FILTER',
      id
    } 
  )
}