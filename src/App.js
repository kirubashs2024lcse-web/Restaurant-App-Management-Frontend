import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useState, createContext } from 'react';

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p => p.id === item.id ? {...p, quantity: p.quantity + 1} : p);
      }
      return [...prev, {...item, quantity: 1}];
    });
  };
  return (
    <div className="App">
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
      <CartContext.Provider value={{cartItems, addToCart, setCartItems}}>
        <Outlet />
      </CartContext.Provider>
    </div>
  );
}

export default App;
