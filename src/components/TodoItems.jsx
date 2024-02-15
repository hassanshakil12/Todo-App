import React from "react";
import css from "../styles/TodoItems.module.css";

const InputItem2 = ({ name, date, handleDeleteBtn }) => {
  return (
    <div className={`${css.container} container`}>
      <div className={`${css.Row} row`}>
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 text-center">
          <div
            className={`${css.Btn} btn btn-danger`}
            onClick={() => handleDeleteBtn(name)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputItem2;
