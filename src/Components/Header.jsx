import React from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import search from '../assets/search.png'
import logo from '../assets/logopng.png'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  const navigation = [
    {to:'/', label:'Home'},
    {to:'/about', label:'About'},
    {to:'/course', label:'Course'},
    {to:'/blog', label:'Blogs'},
    {to:'/contact', label:'Contact Us'}
  ]
  const [toggle, setToggle] = useState(false);
  const navToggle = () =>{
    setToggle(!toggle)
  }
  const display = navigation.map((nav, index)=>{
    return(
      <ul key={index}><NavLink className='hover:text-secondary ease-in duration-300' to={nav.to}>{nav.label}</NavLink></ul>
    )
  })
  return (
    <div className=' shadow-lg '>
      <div className='flex items-center justify-between p-2 font-poppins mx-3'>
        <div> <Link to={'/'} ><img src={logo} alt="logo" /></Link> </div>
      <div className=' hidden md:flex lg:flex '><span className='inline-flex space-x-6 font-semibold text-xl'>{display}</span></div>
      <div className='hidden md:flex lg:flex'>
        <span className='inline-flex items-center gap-10'><img src={search} alt="search" />
        <button className='border-2 border-secondary rounded-md text-secondary text-lg font-semibold p-3 px-6 mr-5'>Login</button></span>

      
      </div>
      <span onClick={navToggle} className='md:hidden lg:hidden text-2xl font-semibold text-secondary'>{toggle ? <FaTimes/> : <FaBars/>}</span>

      </div>
     

    </div>
  )
}

export default Header
