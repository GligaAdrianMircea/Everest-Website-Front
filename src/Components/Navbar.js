import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import "../Styles/subnavbar.css";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { Icon } from "@iconify/react";
import { useState } from "react";
function Navbar() {
  const { user } = useGetAuthContex();
  let [here,setHere]=useState(0)
  let arrow= document.querySelector(".navbar-arrow")
  let subNavBar=document.querySelector(".sub-container")
  const down=()=>{
    if (here === 0) {
      setHere(1)
      arrow.classList.add("navbar-rotate");
      subNavBar.classList.add("sub-transition")
    }else{
      setHere(0);
      arrow.classList.remove("navbar-rotate");
      subNavBar.classList.remove("sub-transition");
    }
  }
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-left"></div>
      </Link>
      <div className="navbar-center">
        <Link to="/" className="dec navbar-link-container">
          <div className="navbar-link">Acasa</div>
        </Link>
        <Link to="/allproducts" className="dec navbar-link-container">
          <div className="navbar-link">Produse</div>
        </Link>
        <Link to="/Contact" className="dec navbar-link-container">
          <div className="navbar-link">Contact</div>
        </Link>
        <Link to="/VindeProdus" className="dec navbar-link-container">
        <div className="navbar-link">Vinde un Produs</div>
        </Link>
        <Link to="/CumparateDeMine" className="dec navbar-link-container">
        <div className="navbar-link">Cumparate/Vandute De Mine</div>
        </Link>
      </div>
      <div className="navbar-right">
        <div className="Log-in">Log in:</div>
        {user && <div className="navbar-user"><span className="username">{user.username}</span> </div>}
        <div className="navbar-arrow" onClick={down}>
          <Icon icon="ep:arrow-down-bold"/>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
