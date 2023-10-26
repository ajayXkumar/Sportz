import React from 'react'
import "../styles/nav.css"
import {Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='back'>
         <ul>
            <li><Link to="/" style={{textDecoration:'none', color:'white'}}>Home</Link></li>
            <li><Link to="/" style={{textDecoration:'none', color:'white'}}>Game</Link></li>
            <li><Link to="/" style={{textDecoration:'none', color:'white'}}>Events</Link></li>
            <li><Link to="/" style={{textDecoration:'none', color:'white'}}>Contact us</Link></li>
         </ul>
    </div>
  )
}

export default Nav