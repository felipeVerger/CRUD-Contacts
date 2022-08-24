import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout = ({ children }) => {
  return (
    <div className='layout-conatiner'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout