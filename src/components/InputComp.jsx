import React from 'react'
import css from "../styles/InputComp.module.css"

const InputComp = () => {
  return (
    <div className={`${css.container} container`}>
        <div className={`${css.Row} row`}>
            <div className="col-6">
                <input type="text" placeholder='Enter todo task' className={`${css.Input}`}/>
            </div>
            <div className="col-4">
                <input type="date" className={`${css.Input}`}/>
            </div>
            <div className="col-2 text-center">
                <div className={`${css.Btn} btn btn-success`}>Add</div>
            </div>
        </div>
    </div>
  )
}

export default InputComp;