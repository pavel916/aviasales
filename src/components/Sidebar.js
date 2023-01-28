import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import UserInput from "./UserInput";
import TodoItem from "./TodoItem";
// import {handler} from "../store/ticketsSlice"





const Sidebar = () => {


const [isChecked, setIsChecked] = useState(false)


const handler = () => {
    setIsChecked(!isChecked)
}

  return (
    <div className="sidebar">
      <h3>количество пересадок</h3>
      <form>
        <label>
          <input type="checkbox" className="input" id="1" checked={isChecked} onChange={handler} />
          <span className="cheker">Все</span>
        </label>
        <label>
          <input type="checkbox" className="input" id="2" checked={isChecked} onChange={handler} />
          <span className="cheker">Без пересадок</span>
        </label>
        <UserInput />
        <TodoItem />
      </form>
    </div>
  );
};


export default Sidebar;
