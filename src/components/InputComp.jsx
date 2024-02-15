import React, { useState } from "react";
import css from "../styles/InputComp.module.css";

const InputComp = ({ handleAddBtn }) => {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameOnChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateOnChange = (event) => {
    setTodoDate(event.target.value);
  };

  const addBtn = () => {
    handleAddBtn(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className={`${css.container} container`}>
      <div className={`${css.Row} row`}>
        <div className="col-6">
          <input
            onChange={handleNameOnChange}
            type="text"
            placeholder="Enter todo task"
            className={`${css.Input}`}
          />
        </div>
        <div className="col-4">
          <input
            onChange={handleDateOnChange}
            type="date"
            className={`${css.Input}`}
          />
        </div>
        <div className="col-2 text-center">
          <div className={`${css.Btn} btn btn-success`} onClick={addBtn}>
            Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComp;
