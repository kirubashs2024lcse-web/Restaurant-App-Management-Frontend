import { Outlet } from 'react-router-dom';
import './App.css';
import { useState, createContext } from 'react';
import Header from './Common/Header';

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
      <Header />
      <CartContext.Provider value={{cartItems, addToCart, setCartItems}}>
        <Outlet />
      </CartContext.Provider>
    </div>
  );
}

export default App;
