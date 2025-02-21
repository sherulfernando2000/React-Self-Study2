import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const num = 0

  const[num,count] = useState(0);    // num = variable count = function (use state athule thiyana value eka num ekata assign venawa)
  const[change,changeN] = useState(5);


  const increment = () =>{
    //num += 1          //doent work in react. need to use hook_use state - to change a vaiable dynamically
      count(num+1)
  }

  const decrement = () =>{
    count(num-1)
  }

  const changeNum = () =>{
      changeN(10)
  }

  useEffect(()=>{
      console.log("hi")
  },[num])                           //[] - dependency list - to put needed state, without dependecy list apply to all states

  return (
    <>
      
      <p>Count: {num}</p>
      <button onClick={decrement} >-</button>

      <button onClick={increment}>+ </button>
      <br></br>
      <br></br>
      <br></br>

      <p>Change: {change}</p>
      <button onClick={changeNum}>Click to Change</button>
    </>
  )
}

export default App
