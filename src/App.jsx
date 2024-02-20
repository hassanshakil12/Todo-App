import React, { useContext, useState } from "react";
import Head from "./components/Head";
import InputComp from "./components/InputComp";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { TodoItemsContext } from "./context/todo_items_store";


const App = () => {
  const initialtodoItems = [
    {
      name: "Wake Up",
      date: "13/02/2024",
    },
    {
      name: "Go to University",
      date: "19/02/2024",
    },
    {
      name: "Meet Friends",
      date: "20/02/2024",
    },
    {
      name: "Have Lunch",
      date: "22/02/2024",
    },
    {
      name: "Return to Home",
      date: "27/02/2024",
    },
    {
      name: "Begin Coding...",
      date: "22/03/2024",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const addBtn=(itemName, itemDate)=>{
    console.log(`Item Added: ${itemName} Date: ${itemDate}`)
    const newTodoItem = [...todoItems, {name: itemName, date: itemDate}]
    setTodoItems(newTodoItem)
  }

  const deleteBtn=(itemName)=>{
    console.log(`Item Deleted: ${itemName}`)
    const newTodoItem = todoItems.filter(item=> item.name !== itemName)
    setTodoItems(newTodoItem);
  }

  return (
    <>
      <div className="main">
        <center>
          <TodoItemsContext.Provider value={{
            todoItems: todoItems, 
            addBtn: addBtn, 
            deleteBtn: deleteBtn
            }}>
            <Head />
            <InputComp/>
            <TodoItem />
          </TodoItemsContext.Provider>
        </center>
      </div>
    </>
  );
};

export default App;
