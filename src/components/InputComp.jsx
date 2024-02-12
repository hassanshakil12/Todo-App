import React from 'react'

const InputComp = () => {
  return (
    <div className="container">
        <div className="row Row">
            <div className="col-6">
                <input type="text" placeholder='Enter todo task'/>
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-2 text-center">
                <div className="btn btn-success Btn">Add</div>
            </div>
        </div>
    </div>
  )
}

export default InputComp;