import React, { useState } from "react";
import Head from "./components/Head";
import InputComp from "./components/InputComp";
import TodoItem from "./components/TodoItem";
import "./App.css";

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

  const handleAddBtn=(itemName, itemDate)=>{
    console.log(`Item Added: ${itemName} Date: ${itemDate}`)
    const newTodoItem = [...todoItems, {name: itemName, date: itemDate}]
    setTodoItems(newTodoItem)
  }

  return (
    <>
      <div className="main">
        <center>
          <Head />
          <InputComp handleAddBtn ={handleAddBtn}/>
          <TodoItem todoList={todoItems} />
        </center>
      </div>
    </>
  );
};

export default App;
