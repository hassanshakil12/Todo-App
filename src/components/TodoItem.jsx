import React from 'react'
import TodoItems from "./TodoItems"

const TodoItem = ({todoList}) => {
  return (
    <>
    {todoList.map((item)=>
        <TodoItems key={item.date} name={item.name} date={item.date} />
    )}
    </>
  )
}

export default TodoItem