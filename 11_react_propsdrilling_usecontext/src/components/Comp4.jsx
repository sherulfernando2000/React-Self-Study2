import React from 'react'
import { useContext } from 'react'
import { userApp } from './Comp1';

function Comp4() {
    
    const user = useContext(userApp);

  return (
    <div>
      <h5>Child 3</h5>
      <p>welcome pass {user}</p>
    </div>
  )
}

export default Comp4
