import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import BodyComponent from './components/BodyComponent/BodyComponent'

function App() {

  const style_dev ={       //internal css
    color: 'red',
    fontSize: '2rem'
    
  }
 

  return (
    <>

        <p style={style_dev}>   {/* internal css */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vel! Rem, neque nisi? 
            Autem saepe consequuntur, sed ex repellendus, similique unde necessitatibus est optio neque modi
             accusamus suscipit, impedit vero.
          </p>
      


    </>
  )
}

export default App
