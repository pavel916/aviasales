import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { v4 } from 'uuid';
import Todo from "./Todo";

const TodoItem = () => {

const dispatch = useDispatch()
const todoItem = useSelector(state => state.todo.todos)
const [todoValue, setTodoValue] = useState('')

const addTodoHandler = (e) => {
  e.preventDefault()
  const todo = {
    id: v4(),
    text: todoValue,
    completed: false
  }
  dispatch(addTodo(todo))
  setTodoValue('')
}

  return (
    <label>
      <input 
       type="text"
       className="input"
       value={todoValue}
       onChange={(e) => setTodoValue(e.target.value)}
        />
      {todoItem.map((item) => {
        return (
            <Todo text={item.text}/>
        )
      })}
      <button onClick={addTodoHandler}>добавить</button>
    </label>
  );
};

export default TodoItem