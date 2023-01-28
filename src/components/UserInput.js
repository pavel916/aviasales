import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFerstName } from "../store/ticketsSlice";


const UserInput = () => {

const dispatch = useDispatch()

const name = useSelector(state => state.user.firstName)

  return (
    <label>
      <input 
      type="text" 
      className="input" 
      onChange={(e) => {
        dispatch(setFerstName(e.target.value))
      }}
      />
      <div className="cheker">{name}</div>
    </label>
  );
};


export default UserInput