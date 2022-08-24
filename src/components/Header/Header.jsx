import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/crud-logo.png'

import './HeaderStyle.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='header-left'>
                <img src={logo} alt="logo" />
                <h2>CRUD Contacts</h2>
            </div>
            <nav>
                <Link to={'/'} className='nav-link'>Contacts</Link>
                <Link to={'/new-client'} className='nav-link'>New Contact</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header