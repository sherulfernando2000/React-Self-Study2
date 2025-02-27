import React from 'react'
import { useState } from 'react'
import Comp2 from './Comp2';
import { createContext } from 'react';

export const userApp = createContext();

function Comp1() {
    const [user,setUser] = useState("User");
    
  return (
    <div>
        <userApp.Provider value={user}>
        <h2>Parent</h2>
      <p>Welcome {user}</p>
      <input type="text" placeholder='enter name' 
        onChange={(e)=>{
                setUser(e.target.value)
        }}/>
        <Comp2/>
        
        </userApp.Provider>
      
        
        

    </div>
  )
}

export default Comp1
