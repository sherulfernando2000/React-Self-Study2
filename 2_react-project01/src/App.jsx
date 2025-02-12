import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './assets/components/MyComponent/MyComponent';
import ClassComponet from './assets/components/MyComponent/ClassComponet';
import HeaderComponent from './assets/components/HeaderComponent/HeaderComponent';
import BodyComponent from './assets/components/BodyComponent/BodyComponent';
import FooterComponent from './assets/components/FooterComponent/FooterComponent';

function App() {
    const firstName = "sherul";
    const middleName = "dhanushka";
    const lastName = "fernando";
    const getName = (f,m,s) => {
      return `${f} ${m} ${s}`;
    }

    const fruit = ["Apple","Mango"]

  return (
    <>
    
      
      {/* <h1 className='heading'>Vite + React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore id distinctio consectetur nihil voluptas minus, repellat aut nisi quos consequatur tempora exercitationem, error temporibus repudiandae vero eum earum maiores.</p>

      <br/>
      <p className='text'>Fullname: {firstName} {middleName} {lastName} </p>
      <p className='text'>Fullname(using function): {getName("shenal","dana","ferna")}</p>
      <p className='text'>{fruit[0]} is red</p>
      <MyComponent/>
      <ClassComponet/>
     */}

      <div id='wrapper'>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>

      </div>
      
    </>  
    
  )
}

export default App
