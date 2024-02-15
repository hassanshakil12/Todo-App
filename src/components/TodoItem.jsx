import React from 'react'
import TodoItems from "./TodoItems"

const TodoItem = ({ todoList, handleDeleteBtn }) => {
  return (
    <>
      {todoList.map((item) => (
        <TodoItems
          handleDeleteBtn={handleDeleteBtn}
          key={item.date}
          name={item.name}
          date={item.date}
        />
      ))}
    </>
  );
};

export default TodoItem