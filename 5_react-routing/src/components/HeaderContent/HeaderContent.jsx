import React from 'react'
import Logo from '../../assets/react.svg'
import './HeaderContent.css'
import MenuItems from '../MenuItems/MenuItems'
import Links from '../Links/Links'

function HeaderContent() {
  return (
    <>
        <div id='header'>
                <a href=''><img src={Logo} alt="" /></a>

                <div className='links'>
                    <Links/>
                </div>
        </div>
      
       
    </>
  )
}

export default HeaderContent
