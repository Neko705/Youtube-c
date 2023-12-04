import React from 'react';
import './searchbar.css';
import {FaSearch} from 'react-icons/fa';

function Searchbar() {
  return (
    <>
      <div className='SearchBar_container'>
        <div className='SearchBar_container2'>
            <div className='search_div'>
                <input type="text" className='iBox_SearchBar'/>
                <FaSearch className='searchIcon_Searchbar'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar;