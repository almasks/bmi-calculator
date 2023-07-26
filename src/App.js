import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight] =useState("")
  const [height,setHeight] =useState("")
  const [bmi,setBmi] =useState('')
  const [message,setMessage] =useState('')
  const calcBmi =(e)=>{
    e.preventDefault()
    if(weight==="" ||height===""){
      alert("please enter valid weight and height")
    }else{
      let bmi =(weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage('You are Underweight')
      }else if(bmi>=25 && bmi<30){
        setMessage('You have healthy weight')
      }else{
        setMessage('You are Overweight')
      }

    }
  }
  let reload =()=>{
    window.location.reload()

  }
  
  return (
    <div className="App">
      <div className='container'>
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div className='inputs'>
          <label>Weight  <input type='text' value={weight} placeholder='weight in kg' onChange={(e)=>setWeight(e.target.value)}/><br/>
           </label>
            <label>Height   <input type='text' value={height} placeholder='height in cm' onChange={e=>setHeight(e.target.value)}/>
 </label>
          </div>
          <div>
            <button type='submit'>Submit</button><br/>
            <button type='button'onClick={reload}>Reload</button>
          </div>
        </form>
        <div className='results'>
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
     
    </div>
  );
}

export default App;
