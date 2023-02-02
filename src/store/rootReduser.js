import {combineReducers} from 'redux'

import  {transferFilterReducer } from './transfer/transferReduser'
import  {ticketsReducer}  from './tickets/ticketsReduser'
import  {sortReducer}  from './sort/sortReduser'


export const rootReduser = combineReducers({
    
    
  transferFilter: transferFilterReducer,
  tickets: ticketsReducer,
  sort: sortReducer
    
   
})