import React from 'react'
import Head from './components/Head';
import InputComp from './components/InputComp';
import InputItem1 from './components/InputItem1';
import InputItem2 from './components/InputItem2';
import "./App.css";;

const App = () => {
  return (
    <>
    <div className="main">
      <center>
        <Head />
        <InputComp />
        <InputItem1 />
        <InputItem2 />
      </center>
    </div>
    </>
  )
}

export default App;