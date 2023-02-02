
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import uuid from 'react-uuid'

import ShowButton from '../ShowButton'

import classes from './TicketList.module.scss'






const TicketList = ({initialTickets, activeSortTab, transferFilter}) => {

  const [showItemCount, addShowItemCount] = useState(5)
  const [currentTickets, setCurrentTickets] = useState([])
  const [tickets, setTickets] = useState([])
  const [stop, setStop] = useState([])

  // Сортировка билетов
  useEffect(() => {

    if (activeSortTab === 'cheapest') setTickets(initialTickets.sort((a, b) => a.price - b.price))

    if (activeSortTab === 'fastest') {
      setTickets(initialTickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration
                - (b.segments[0].duration + b.segments[1].duration)))
    }

    if (activeSortTab === 'optimal') {
      setTickets(initialTickets.sort((a, b) => a.segments[0].duration + a.segments[1].duration + a.price
                - (b.segments[0].duration + b.segments[1].duration + b.price)))
    }
  }, [activeSortTab, initialTickets])

  // Добавление в массив id активных фильтров
  useEffect(() => {
    const filterStop = transferFilter.reduce((acc, i) => {
      if (i.status === true) {
        acc.push(i.id)
      }
      return acc
    }, [])
    setStop(filterStop)
  }, [initialTickets])

  // Фильтрация билетов
  useEffect(() => {
    const filterTicketsByForward = tickets.filter((i) => (stop.includes(i.segments[0].stops.length)))
    const filterTicketsByBack = filterTicketsByForward.filter((i) => (stop.includes(i.segments[1].stops.length)))
    setTickets(filterTicketsByBack)
  }, [stop])

  // Обрезка массива билетов
  useEffect(() => {
    setCurrentTickets(tickets.slice(0, showItemCount))
  }, [showItemCount, tickets])

  const onShowClick = () => {
    addShowItemCount((i) => i + 5)
  }

  return (
    <div>
      {tickets.length
        ?
        currentTickets.map((item) => {
          return (
            <div key={uuid()} className={classes['tickets_vrapper']}>
              <div className={classes['tickets_header']}>
                <div className={classes['tickets_price']}>{item.price} Р</div>
                <div className={classes['tickets_logo']}>
                  <img
                    src={`//pics.avs.io/99/36/${item.carrier}.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className={classes['tickets_data-wrapper']}>
                {item.segments.map((segment) => {
                  return (
                    <>
                      <div className={classes['tickets_data']}>
                        <div className={classes['tickets_data__item']}>
                          <p className={classes['tickets_data__time_item']}>{`${segment.origin} - ${segment.destination}`}</p>
                          <p>
                            {new Date(segment.date).getHours() +  // часы время отбытия
                                        ':' +
                                        new Date(segment.date).getMinutes() +  // минуты время отбытия
                                        ' - ' +
                                        new Date(
                                          new Date(segment.date).setHours(
                                            new Date(segment.date).getHours() +
                                              Math.ceil(segment.duration / 60)
                                          )
                                        ).getHours() +
                                        ':' +
                                        new Date(
                                          new Date(segment.date).setMinutes(
                                            new Date(segment.date).getMinutes() +
                                              segment.duration
                                          )
                                        ).getMinutes()}
                          </p>
                        </div>
                        <div className={classes['tickets_data__item']} >
                          <p className={classes['tickets_data__time_item']}>в пути</p>
                          <p>
                            {Math.ceil(segment.duration / 60) +
                                        ':' +
                                        (segment.duration % 60)}
                          </p>
                        </div>
                        <div className={classes['tickets_data__item']}>
                          <p className={classes['tickets_data__time_item']}>
                            {segment.stops.length === 0
                              ? 'без пересадок'
                              : segment.stops.length === 1
                                ? 'одна пересадка'
                                : segment.stops.length >= 2
                                  ? `${segment.stops.length} пересадки`
                                  : ''}
                          </p>
                          <p>{segment.stops.join(', ')}</p>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          )
        })
        :
        <div>Рейсов, подходящих  не найдено</div>}

      {tickets.length > 5 ? <ShowButton onShowClick={onShowClick}/> : null}
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialTickets: [
    ...state.tickets.ticketsStart,
    ...state.tickets.ticketsEnd,
  ],
  activeSortTab: state.sort.activeSortTab,
  transferFilter: state.transferFilter
})

export default connect(mapStateToProps, {})(TicketList)