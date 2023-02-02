import React from 'react'

import classes from '../components/ShowButton.module.scss'



const ShowButton = ({ onShowClick }) => (
  <div >
    <button className={classes['button-more']} onClick={onShowClick} >
                Показать еще 5 билетов!
    </button>
  </div>
)

export default ShowButton