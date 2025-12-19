import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <h2 style={{color: 'white', margin: 0}}>Muniandi Villas (Veg & Non - Veg)</h2>
      <nav style={{marginTop: '10px'}}>
        <NavLink to={"/"}>Home</NavLink> |
        <NavLink to={"/about"}>About</NavLink> |
        <NavLink to={"/items"}>Items</NavLink> |
        <NavLink to={"/cart"}>Cart</NavLink> |
        <NavLink to={"/login"}>Login</NavLink> |
        <NavLink to={"/admin"}>Admin</NavLink>
      </nav>
    </header>
  );
};

export default Header;