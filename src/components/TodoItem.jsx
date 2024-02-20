import React, { useContext } from 'react'
import TodoItems from "./TodoItems"
import { TodoItemsContext } from "../context/todo_items_store";

const TodoItem = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <TodoItems
          key={Math.random() * 100}
          name={item.name}
          date={item.date}
        />
      ))}
    </>
  );
};

export default TodoItem