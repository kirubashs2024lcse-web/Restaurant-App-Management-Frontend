import React, { useState } from "react";

const AddMenuItem = () => {
  const [formData, setFormData] = useState({
    itemName: "", category: "", price: "", type: "", description: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(val => !val)) {
      setMessage("Please fill all fields.");
      return;
    }
    setMessage("Menu item added successfully!");
    setFormData({ itemName: "", category: "", price: "", type: "", description: "" });
  };

  const inputStyle = { width: "100%", padding: "10px", marginBottom: "12px", borderRadius: "5px", border: "1px solid gray" };
  const buttonStyle = { width: "100%", padding: "12px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Add Menu Item</h2>
      <form onSubmit={handleAddItem}>
        <label>Food Name:</label>
        <input type="text" name="itemName" placeholder="Enter food name" value={formData.itemName} onChange={handleChange} style={inputStyle} />

        <label>Category:</label>
        <select name="category" value={formData.category} onChange={handleChange} style={inputStyle}>
          <option value="">Select Category</option>
          <option>Starters</option>
          <option>Soups</option>
          <option>Main Course</option>
          <option>Biryani</option>
          <option>Chinese</option>
          <option>Desserts</option>
          <option>Beverages</option>
        </select>

        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
          <option value="">Select Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>

        <label>Price (₹):</label>
        <input type="number" name="price" placeholder="Enter price" value={formData.price} onChange={handleChange} style={inputStyle} />

        <label>Description:</label>
        <textarea rows="3" name="description" placeholder="Enter description" value={formData.description} onChange={handleChange} style={inputStyle} />

        <button type="submit" style={buttonStyle}>Add Item</button>
      </form>

      {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default AddMenuItem;
