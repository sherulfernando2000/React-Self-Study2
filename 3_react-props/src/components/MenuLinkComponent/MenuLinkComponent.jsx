import React from 'react'
import './MenuLinkComponent.css'

function MenuLinkComponent(props) {
  return (
    
      <a className="nav-link" href={props.url}>{props.linkname}</a>
   
  )
}

export default MenuLinkComponent
