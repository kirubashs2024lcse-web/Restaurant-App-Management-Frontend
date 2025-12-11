import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [data,setData] = useState([]);
  useEffect(()=>{
      const fetchResponse = async()=>{
      try{
        const response = await fetch("http://localhost:3001/Restaurant.json");
        const da =await response.json();
        setData(da);
      }catch(err){
        console.log("Error fetching data:", err);
      }
    };
    fetchResponse();
  },[]);
  return (
    <div className="App">
      <header>
        <NavLink to={"/login"}>login</NavLink> |{" "}
        <NavLink to={"/"}>Home</NavLink> |{" "}
        <NavLink to={"/search"}>Search</NavLink> |{" "}
        <NavLink to={"/restaurant"}>Restaurant</NavLink> |{" "}
        <NavLink to={"/cart"}>Cart</NavLink> |{""}
        <NavLink to={"/help"}>Help</NavLink> |{" "}
      </header>
      <Outlet context={{data}}></Outlet>
    </div>
  );
}

export default App;
