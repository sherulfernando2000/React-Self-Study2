import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './Links.css'

function Links() {
  return (
    <div className='link-list'>
      <MenuItems linktext="Home" linkurl="/"/> 
      <MenuItems linktext="Blog" linkurl="/blog"/>
      <MenuItems linktext="AboutUs" linkurl="/about"/>
      <MenuItems linktext="Contact" linkurl="/contact"/>
     
    </div>
  )
}

export default Links
