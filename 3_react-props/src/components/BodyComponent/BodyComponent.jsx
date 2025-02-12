import React from 'react'
import './BodyComponent.css'

function BodyComponent(props) {
  return (
    <div className='sections'>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default BodyComponent
