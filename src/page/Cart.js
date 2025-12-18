import React, { useContext } from 'react';
import { CartContext } from '../App';

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? {...item, quantity: newQuantity} : item
      ));
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Order placed successfully! Total: ₹${total}`);
    setCartItems([]);
  };

  return (
    <div className="container">
      <h1>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="card" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <img src={item.image} alt={item.name} style={{width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} />
              <div style={{flex: 1}}>
                <h3>{item.name}</h3>
                <p>₹{item.price} each</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <button className="btn btn-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p style={{fontWeight: 'bold'}}>₹{item.price * item.quantity}</p>
            </div>
          ))}
          
          <div className="card" style={{textAlign: 'center'}}>
            <h2>Total: ₹{total}</h2>
            <button className="btn" onClick={handleOrder} style={{fontSize: '18px', padding: '15px 30px'}}>Order Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;