import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function hello1(){         //normal function
    console.log("hello1");
  }

  const hello2 = () =>{     {/*  arrow function*/}
    console.log("hello2");
  }

  function hello3(name){
    console.log("hello3 " + name)
  }

  const hello4 = (name1) =>{
    console.log("hello4 " + name1)
  }


  //Event object 
  function hello5(e){         //normal function
    console.log("hello5", e);  // need to use comma to take event object cant use + mark 
  }

  const hello6 = (e) =>{     {/*  arrow function*/}
    console.log("hello6",e);
  }

  function hello7(name,e){
    console.log("hello7 " + name, e)
  }

  const hello8 = (name1,e) =>{
    console.log("hello8 " + name1, e.target)
  }




  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
       {/* my code */}
      <button onClick={hello1} >Click normal function</button>
      
       {/* if brackets are put then the output is given automatically with out click the button */}
      <button onClick={hello1()} >Click normal function</button>  

      <button onClick={hello2} >Click arrow function</button>

       {/* the output is given automatically with out click the button */}
      <button onClick={hello3("sherul")} >function with para</button>

      {/* To stop load auto, need to call parameter function in anonymous function*/}
      <button onClick={()=>{ hello3("sherul")}} >function with para in anonymous</button>

      {/* arrow function in anonymous function*/}
      <button onClick={()=>{ hello4("shenal")}} >arrow fun. para in anonymous</button>

      {/* Event object */}
      <button onClick={ hello5} >hello5</button>    

      <button onClick={ hello6} >hello6</button>     
     
      <button onClick={(e)=>{ hello7("shahan",e)}} >hello 7</button>

      <button onClick={(e)=>{ hello8("Amal",e)}} >hello 8</button>


    </>
  )
}

export default App
