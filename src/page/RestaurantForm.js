import React,{useState} from "react";
const AddMenuItem = () => {
  const [data, setData] = useState({n:"", c:"", p:"", t:"", d:""}), [msg, setMsg] = useState("");
  const style = {i:{width:"100%", padding:"10px", marginBottom:"12px", borderRadius:"5px", border:"1px solid #ddd"},b:{width:"100%", padding:"12px", background:"green", color:"white", border:"none", borderRadius:"5px", cursor:"pointer"}};
  const handle = (e) => { const {name, value} = e.target; setData(d=>({...d, [name]:value})); };
  const submit = (e) => { 
    e.preventDefault(); 
    if(!Object.values(data).every(v=>v)) { setMsg("Fill all fields"); return; }
    setMsg("Added successfully!"); setData({n:"", c:"", p:"", t:"", d:""});
  };
  return (
    <div style={{maxWidth:"500px", margin:"auto", padding:"20px"}}>
      <h2>Add Menu Item</h2>
      <form onSubmit={submit}>
        <label>Food Name:</label>
        <input type="text" name="n" placeholder="Food name" value={data.n} onChange={handle} style={style.i}/>
        <label>Category:</label>
        <select name="c" value={data.c} onChange={handle} style={style.i}>
          <option value="">Select Category</option>
          <option>Starters</option>
          <option>Main Course</option>
          <option>Desserts</option>
        </select>
        <label>Type:</label>
        <select name="t" value={data.t} onChange={handle} style={style.i}>
          <option value="">Select Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>
        <label>Price (₹):</label>
        <input type="number" name="p" placeholder="Price" value={data.p} onChange={handle} style={style.i}/>
        <label>Description:</label>
        <textarea rows="3" name="d" placeholder="Description" value={data.d} onChange={handle} style={style.i}/>
        <button type="submit" style={style.b}>Add Item</button>
      </form>
      {msg&&<p style={{marginTop:"10px", color:"green"}}>{msg}</p>}
    </div>
  );
};
export default AddMenuItem;
