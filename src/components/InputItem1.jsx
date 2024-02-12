import React from 'react'

const InputItem1 = () => {
  let todoName = 'Buy Vegetables';
  let todoDate = '12/02/2024';
  return (
    <div className="container">
        <div className="row Row">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2 text-center">
                <div className="btn btn-danger Btn">Delete</div>
            </div>
        </div>
    </div>
  )
}

export default InputItem1;