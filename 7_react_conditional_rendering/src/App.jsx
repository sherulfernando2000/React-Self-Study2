import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';

function App() {
  
  const loggedin = true;
  const names = ["Sherul","Dhanu"];
  const namesCount = names.length;

  return (
    <>
     {/* if (loggedin) {  
          <h4>logged in</h4>
      }else{
          <h4>logged out</h4>
      } */}
      
      {loggedin && <h4>logged in</h4>}
      {!loggedin && <h4>logged out</h4>}     {/* conditional rendering*/}

      {loggedin && <LoggedIn/>}
      {!loggedin && <LoggedOut/>}           {/*  // conditional rendering using components*/}


      {namesCount > 0 && names.map((name)=>{      /* rendering using array map method */
         return <h3>{name}</h3>
      })}

      {namesCount == 0 && <h3>No Names</h3>}

      {namesCount > 0 ? ( names.map((name)=>{      /* Ternory Operator - {namesCount > 0 ? (): () }     */
         return <h3>Tern0ry {name}</h3>
      })) : (<h3>Ternory No Names</h3>)   }



    </>
  )
}

export default App
