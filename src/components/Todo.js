import React from "react";

const Todo = ({text}) => {
    return (
        <div className="todo_wrapper">
            <input className="todo_completed" type="checkbox"></input>
            <div className="todo_task">{text}</div>
            <button className="todo_delete">del</button>
        </div>
    )
}

export default Todo