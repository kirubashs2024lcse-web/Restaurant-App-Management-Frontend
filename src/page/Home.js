import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <h1>Welcome to Muniandi Villas</h1>
        <h2 style={{color: '#2c5530'}}>Authentic Veg & Non-Veg Cuisine</h2>
      </div>
      
      <div className="grid">
        <div className="card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.28rrGkc7vZ8pZk2OBI_Z8QHaEw?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Restaurant" style={{width: '100%', borderRadius: '4px'}} />
          <h3>Traditional Ambiance</h3>
          <p>Experience authentic South Indian dining in our traditional setting with modern comfort.</p>
        </div>
        
        <div className="card">
          <img src="https://c8.alamy.com/comp/JK7TB1/selection-display-of-salads-at-a-luxury-hotel-restaurant-buffet-bar-JK7TB1.jpg" alt="Fresh Food" style={{width: '100%', borderRadius: '4px'}} />
          <h3>Fresh Ingredients</h3>
          <p>We use only the freshest ingredients sourced locally to prepare our delicious meals.</p>
        </div>
        
        <div className="card">
          <img src="https://tse2.mm.bing.net/th/id/OIP.buu8nfYs3Sm44TnM191dtgHaLH?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Chefs" style={{width: '100%', borderRadius: '4px'}} />
          <h3>Expert Chefs</h3>
          <p>Our experienced chefs bring you authentic flavors with a perfect blend of spices.</p>
        </div>
      </div>
      
      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <Link to="/login" className="btn" style={{textDecoration: 'none', marginRight: '10px'}}>Login</Link>
        <Link to="/items" className="btn" style={{textDecoration: 'none'}}>Order Now</Link>
      </div>
    </div>
  );
}

export default Home;