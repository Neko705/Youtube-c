import React from "react";
import './navbar.css'
import logo from './youtube.ico'
import Searchbar from "./SearchBar/searchbar";
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi'


function Navbar(){
    const CurrentUser=null;
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
            <RiVideoAddLine size={24} className={"vid_bell_Navbar"}/>
            <IoMdNotificationsOutline size={24} className="vid_bell_Navbar"/>
            <div className="User_cont_navbar">
                <p className="User_btn">
                    <BiUserCircle size={40} aria-placeholder="Sign In"/>
                </p>
            </div>
        </div>
    )
}

export default Navbar


