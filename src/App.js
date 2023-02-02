
import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import logo from './Logo.svg'
import TransferFilter from './components/TransferFilter'
import Sort from './components/Sort'
import TicketList from './components/Ticket/TicketList'
import * as actions from './store/tickets/ticketsAction'
import Error from './components/Error'
import Loader from './components/Loader'
import classes from './App.module.scss'





function App({
  isError, searchId,
  getSearchId, getTicketsStart,
  getTicketsEnd, ticketsEnd,
  isLoad,
}) {

  useEffect(() => {
    getSearchId()
  }, [])


  useEffect(() => {
    if (searchId) getTicketsStart(searchId)
  }, [searchId])



  useEffect(() => {
    if (searchId) {
      getTicketsEnd(searchId)
    }
  }, [searchId, ticketsEnd])



  return (
    <div className={classes.App}>
      <div className={classes['app-wrapper']}>
        <header className={classes['App-header']}>
          <img src={logo} className={classes['App-logo']} alt="logo" />
        </header>
        <div>
          {isLoad && <Loader/>}
        </div>
        {isError ? <Error /> : (
          <main className={classes.main}>
            <TransferFilter/>
            <Sort/>
            <TicketList/>
          </main>
        )}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  isError: state.tickets.isError,
  searchId: state.tickets.searchId,
  ticketsEnd: state.tickets.ticketsEnd,
  isLoad: state.tickets.isLoad,
})

export default connect(mapStateToProps, actions)(App)