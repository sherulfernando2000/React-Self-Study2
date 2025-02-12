import React from 'react'
import MenuLinkComponent from '../MenuLinkComponent/MenuLinkComponent'
import logo from '../../assets/react.svg'
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <div id='header'>
        <div>
            <a href=""><img src={logo} ></img></a>
        </div>  
      
        <div className='link-list'>
            <MenuLinkComponent linkname="Home" url="#Home"/>
            <MenuLinkComponent linkname="About" url="#About"/>
            <MenuLinkComponent linkname="Blog" url="#Blog"/>
            <MenuLinkComponent linkname="Cart" url="#Cart"/>
            
        </div>
      
      
    </div>
  )
}

export default HeaderComponent
