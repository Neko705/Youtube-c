import React from "react";
import './navbar.css'
import logo from './youtube.ico'
import Searchbar from "./SearchBar/searchbar";
import {RiVideoAddLine} from 'react-icons/ri';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi'
import { Link } from "react-router-dom";


function Navbar(){
    //const CurrentUser = null;
    const CurrentUser={
        result:{
            email:"xyz@gmail.com",
            name:"xyz",
            joinedOn:"2222-07-15T09:57:23.489Z",
        },
    };
    return(
        <div className="container_navbar">
            <div className="Burger_logo_navbar">
                <div className="burger">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <Link to={'/'} className="logo_div_navbar">
                    <img src={logo} alt="" />
                    <p className="logo_title_navbar">YouTube</p>
                </Link>
            </div>
            <Searchbar />
            <RiVideoAddLine size={24} className={"vid_bell_Navbar"}/>
            <IoMdNotificationsOutline size={24} className="vid_bell_Navbar"/>
            <div className="User_cont_navbar">
                {
                    CurrentUser ? (
                    <>
                      <div className="channel_logo_app">
                        <p className="fstchar_logo_app">
                            {
                                CurrentUser?.result.name ?(
                                    <>
                                    {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                    </>
                                ):(
                                    <>
                                    {CurrentUser?.result.email.charAt(0).toUpperCase()}
                                    </>)
                            }
                        </p>
                      </div>
                    </>
                    ):(
                    <>
                      <p className="User_btn">
                      <BiUserCircle size={40} aria-placeholder="Sign In"/>
                      </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar


