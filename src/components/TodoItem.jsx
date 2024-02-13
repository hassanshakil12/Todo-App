import React from 'react'
import TodoItems from "./TodoItems"

const TodoItem = ({todoList}) => {
  return (
    <>
    {todoList.map((item)=>
        <TodoItems name={item.name} date={item.date} />
    )}
    </>
  )
}

export default TodoItem