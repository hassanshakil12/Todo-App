import React from "react";

const InputItem2 = ({name, date}) => {
  return (
    <div className="container">
      <div className="row Row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2 text-center">
          <div className="btn btn-danger Btn">Delete</div>
        </div>
      </div>
    </div>
  );
};

export default InputItem2;
