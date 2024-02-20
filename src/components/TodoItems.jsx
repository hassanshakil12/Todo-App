import React, { useContext } from "react";
import css from "../styles/TodoItems.module.css";
import { TodoItemsContext } from "../context/todo_items_store";

const InputItem2 = ({ name, date }) => {
  const { deleteBtn } = useContext(TodoItemsContext);
  
  return (
    <div className={`${css.container} container`}>
      <div className={`${css.Row} row`}>
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 text-center">
          <div
            className={`${css.Btn} btn btn-danger`}
            onClick={() => deleteBtn(name)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputItem2;
