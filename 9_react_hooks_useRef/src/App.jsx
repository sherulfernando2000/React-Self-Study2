import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [input,setInput] = useState("<Input text goes here>")
 
  const [count,setCount] = useState(0);

  const countRef = useRef(0)
  console.log(countRef.current)

  const inputRef = useRef();

  const inputValidate = useRef();
  

  useEffect(()=>{
    // setCount((count) => count+1)          //useState infinite run wenawa
    countRef.current = countRef.current +1;   //useRef type karaddi e welwake letter eken ekata count wenne

    console.log(inputRef.current)

    inputRef.current.style.backgroundColor = "red";


  })
 
  const handleChange = (e)=>{
    if(e.target.value.length == 0){
      setInput("Hi")
    }else{
      setInput(e.target.value)
    }
   
  }

  const validateChange = () =>{
    let inputValidateVal = inputValidate.current.value;

    if(inputValidateVal == ""){
        inputValidate.current.focus();
    }else if(inputValidateVal>50){
        alert("success")
    }else{
        alert("fail")
    }
  }

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <p>You have input {input}</p>
        {/* <p>Rendered {count}</p> */}
        <p>Rendered {countRef.current}</p>


        <input type="text"  ref={inputRef}/>

        {/*DOM Manupilation*/}
        <br /><br /><br />
        <input type="text" ref={inputValidate}/>
        <button onClick={validateChange}>Validate</button>

      </div>
      
    </>
  )
}

export default App
