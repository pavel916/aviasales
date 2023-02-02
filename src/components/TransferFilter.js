import React from 'react'
import {connect} from 'react-redux'

import { filterActions } from '../store/transfer/transferActions'
import classes from '../components/TransferFilter.module.scss'




const TransferFilter = ({params, changeFilter}) => (
  <div className={classes.sidebar} >
    <h5 >Количество пересадок</h5>
    <div >
      {params.map((i) => (
        <label key={i.id} >
          <input
            type="checkbox" 
            checked={i.status}
            onChange={() => changeFilter(i.id)}
          />
          <span className={classes.cheker}/>
          {i.label}
        </label>
      ))}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  params: state.transferFilter,
})

export default connect(mapStateToProps, filterActions)(TransferFilter)