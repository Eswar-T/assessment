import React from 'react'
import logo from '../assets/Logo-Test.png';
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return(
        <div>
         <nav style={{ display:'flex',width:'100%',height:40,alignItems:'center' }}>
          <div style={{ marginLeft:'9%' }}><img src={logo} alt="" style={{ width:'100%',height:30,maxWidth:80 }}/></div>
          <div style={{ marginLeft:'50%' }} >
          <NavLink style={{ marginRight:'10%',textDecoration:'none',color:'gray' }} exact to="/">Home</NavLink>
          <NavLink style={{ marginRight:'10%',textDecoration:'none',color:'gray' }} exact to="/about">About</NavLink>
          <NavLink style={{ marginRight:'10%',textDecoration:'none',color:'gray' }} exact to="/portfollo">Portfollo</NavLink>
          <NavLink style={{ marginRight:'10%',textDecoration:'none',color:'gray' }} exact to="/blog">Blog</NavLink>
          <NavLink style={{ marginRight:'10%',textDecoration:'none',color:'gray' }} exact to="/contact">Contacts</NavLink>
          </div>
         </nav>    
        </div>    
    )
}

export default NavigationBar;