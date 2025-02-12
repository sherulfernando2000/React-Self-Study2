import React from 'react'
import './MenuItems.css'
import { NavLink } from "react-router";

function MenuItems(props) {
  return (
    <div className='menu-items'>
      {/* <a href={props.linkurl}>{props.linktext}</a> */}
      <NavLink to={props.linkurl}>{props.linktext}</NavLink>
    </div>
  )
}

export default MenuItems
