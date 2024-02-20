import React, { useContext, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import css from "../styles/InputComp.module.css";
import { TodoItemsContext } from "../context/todo_items_store";

const InputComp = () => {
  const { addBtn } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddBtn = () => {
    console.log("done")
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    addBtn(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className={`${css.container} container`}>
      <div className={`${css.Row} row`}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter todo task"
            className={`${css.Input}`}
          />
        </div>
        <div className="col-4">
          <input ref={todoDateElement} type="date" className={`${css.Input}`} />
        </div>
        <div className="col-2 text-center">
          <div className={`${css.Btn} btn btn-success`} onClick={handleAddBtn}>
            <IoAddCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComp;
