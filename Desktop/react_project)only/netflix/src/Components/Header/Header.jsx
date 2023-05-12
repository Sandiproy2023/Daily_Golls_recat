import React from 'react'
import logo from "../../logo.png"
import { Link } from"react-router-dom"
import {BsSearch}from "react-icons/bs";
const Header = () => {
    
  return (
    <nav className='header'>

        <img src={logo} alt="logo" />
       
       <div>
       <Link to="/tvshow"> TV show </Link>
       <Link to="/tvshow"> My list </Link>
       <Link to="/tvshow"> recently add</Link>
       <Link to="/tvshow"> Home</Link>
       <Link to="/tvshow"> My list </Link>
       
       </div>

       <BsSearch />

    </nav>
  )
}

export default Header