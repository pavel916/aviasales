

const Tickets = ({sortTickets}) => {
  return(
    <div className="tickets">
            {sortTickets.map((item) => {
              return (
                <div className="tickets_vrapper">
                  <div className="tickets_header">
                    <div className="tickets_price">{item.price} Р</div>
                    <div className="tickets_logo">
                      <img
                        src={`//pics.avs.io/99/36/${item.carrier}.png`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tickets_data-wrapper">
                    {item.segments.map((segment) => {
                      return (
                        <>
                          <div className="tickets_data">
                            <div className="tickets_data__item">
                              <p className="tickets_data__time_item">{`${segment.origin} - ${segment.destination}`}</p>
                              <p>
                                {new Date(segment.date).getHours() +  // часы время отбытия
                                  ":" +
                                  new Date(segment.date).getMinutes() +  // минуты время отбытия
                                  " - " +
                                  new Date(
                                    new Date(segment.date).setHours(
                                      new Date(segment.date).getHours() +
                                        Math.ceil(segment.duration / 60)
                                    )
                                  ).getHours() +
                                  ":" +
                                  new Date(
                                    new Date(segment.date).setMinutes(
                                      new Date(segment.date).getMinutes() +
                                        segment.duration
                                    )
                                  ).getMinutes()}
                              </p>
                            </div>
                            <div className="tickets_data__item">
                              <p className="tickets_data__time_item">в пути</p>
                              <p>
                                {Math.ceil(segment.duration / 60) +
                                  ":" +
                                  (segment.duration % 60)}
                              </p>
                            </div>
                            <div className="tickets_data__item">
                              <p className="tickets_data__time_item">
                                {segment.stops.length === 0
                                  ? "без пересадок"
                                  : segment.stops.length === 1
                                  ? "одна пересадка"
                                  : segment.stops.length >= 2
                                  ? `${segment.stops.length} пересадки`
                                  : ""}
                              </p>
                              <p>{segment.stops.join(", ")}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
  )
}


export default Tickets