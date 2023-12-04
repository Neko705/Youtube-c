import React from "react";
import './navbar.css'
import logo from './youtube.ico'
import Searchbar from "./SearchBar/searchbar";

function Navbar(){
    return(
        <div className="container_navbar">
            <div className="Burger_logo_navbar">
                <div className="burger">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="logo_div_navbar">
                    <img src={logo} alt="" />
                    <p className="logo_title_navbar">YouTube</p>
                </div>
            </div>
            <Searchbar />
        </div>
    )
}

export default Navbar


