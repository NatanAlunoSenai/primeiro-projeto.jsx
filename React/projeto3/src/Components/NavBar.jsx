import { Link, NavLink } from "react-router-dom"

import './NavBar.module.css'
const NavBar = () => {
  return (
     <nav>
        <NavLink to= "/"> Home </NavLink>
        <NavLink to= "/historia"> 
        História </NavLink>
        <NavLink to= "/cadastro"> Cadastro </NavLink>
     </nav>
  )
}

export default NavBar