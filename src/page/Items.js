import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../App';

function Items() {
  const { addToCart } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/menu');
      const data = await response.json();
      if (data.status === 'Success') {
        setMenuItems(data.data);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setMenuItems([
        { _id: 1, name: 'Dosa', price: 60, image: 'https://culinarydelightsandbeyond.com/wp-content/uploads/2023/03/dosa-5oF7d_hPJG4-scaled.jpg', category: 'South Indian' },
        { _id: 2, name: 'Idly', price: 40, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&h=150&fit=crop', category: 'South Indian' },
        { _id: 3, name: 'Pongal', price: 20, image: 'https://th.bing.com/th/id/OIP.oojl1Pblk_hvGK-nCAa9uQHaJd?w=149&h=190&c=7&r=0&o=5&cb=ucfimg2&dpr=1.3&pid=1.7&ucfimg=1', category: 'Sides' },
        { _id: 4, name: 'Vada', price: 35, image: 'https://i1.wp.com/vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg?fit=2357%2C1885&quality=65&strip=all&ssl=1', category: 'South Indian' },
        { _id: 5, name: 'Rice', price: 50, image: 'https://tse2.mm.bing.net/th/id/OIP.R1EN2wAsZf28nVnh8sTN_wHaFT?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3', category: 'Main Course' },
        { _id: 6, name: 'Biriyani', price: 150, image: 'https://www.yummyoyummy.com/wp-content/uploads/2021/01/DSC_0794-scaled.jpg', category: 'Main Course' },
        { _id: 7, name: 'Chicken Rice', price: 120, image: 'https://www.kannammacooks.com/wp-content/uploads/street-style-chicken-rice-recipe-1-3.jpg', category: 'Non-Veg' },
        { _id: 8, name: 'Fish Curry', price: 180, image: 'https://www.thedeliciouscrescent.com/wp-content/uploads/2023/07/Fish-Curry-4.jpg', category: 'Non-Veg' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container"><h1>Loading menu...</h1></div>;
  }

  return (
    <div className="container">
      <h1>Our Menu</h1>
      
      <div className="grid">
        {menuItems.map(item => (
          <div key={item._id || item.id} className="card">
            <img src={item.image} alt={item.name} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px'}} />
            <h3>{item.name}</h3>
            <p style={{color: '#666'}}>{item.category}</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', color: '#2c5530'}}>₹{item.price}</p>
            <button className="btn" onClick={() => addToCart({...item, id: item._id || item.id})}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;