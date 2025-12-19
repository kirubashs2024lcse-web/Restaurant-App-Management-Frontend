import React, { useContext, useState } from 'react';
import { CartContext } from '../App';

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showInvoice, setShowInvoice] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

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

  const generateInvoice = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const invoiceData = {
      orderId: 'ORD' + Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      customerName: user.name || 'Guest Customer',
      customerEmail: user.email || 'guest@example.com',
      items: cartItems,
      subtotal: total,
      tax: Math.round(total * 0.18),
      total: Math.round(total + (total * 0.18))
    };
    return invoiceData;
  };

  const downloadInvoice = () => {
    const invoice = generateInvoice();
    const invoiceContent = `
MUNIANDI VILLAS (VEG & NON-VEG)
================================
Order ID: ${invoice.orderId}
Date: ${invoice.date} ${invoice.time}
Customer: ${invoice.customerName}
Email: ${invoice.customerEmail}

ITEMS:
${invoice.items.map(item => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`).join('\n')}

Subtotal: ₹${invoice.subtotal}
Tax (18%): ₹${invoice.tax}
Total: ₹${invoice.total}

Thank you for your order!
    `;
    
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Invoice_${invoice.orderId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleOrder = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const invoice = generateInvoice();
    setOrderDetails(invoice);
    setShowInvoice(true);
    setCartItems([]);
  };

  if (showInvoice && orderDetails) {
    return (
      <div className="container">
        <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h1 style={{textAlign: 'center', color: '#2c5530'}}>Invoice</h1>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <h2>Muniandi Villas (Veg & Non-Veg)</h2>
            <p>Order ID: {orderDetails.orderId}</p>
            <p>Date: {orderDetails.date} | Time: {orderDetails.time}</p>
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <h3>Customer Details:</h3>
            <p>Name: {orderDetails.customerName}</p>
            <p>Email: {orderDetails.customerEmail}</p>
          </div>
          
          <div style={{marginBottom: '20px'}}>
            <h3>Order Items:</h3>
            {orderDetails.items.map(item => (
              <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid #eee'}}>
                <span>{item.name} x{item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div style={{borderTop: '2px solid #2c5530', paddingTop: '10px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Subtotal:</span>
              <span>₹{orderDetails.subtotal}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span>Tax (18%):</span>
              <span>₹{orderDetails.tax}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold'}}>
              <span>Total:</span>
              <span>₹{orderDetails.total}</span>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <button className="btn" onClick={downloadInvoice} style={{marginRight: '10px'}}>Download Invoice</button>
            <button className="btn btn-secondary" onClick={() => setShowInvoice(false)}>Back to Cart</button>
          </div>
        </div>
      </div>
    );
  }

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