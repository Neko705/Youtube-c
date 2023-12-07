import React, { useState } from 'react';
import './searchbar.css';
import {FaSearch} from 'react-icons/fa';
import {BsMicFill} from 'react-icons/bs'
import Searchlist from './searchlist';

function Searchbar() {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchList1, setsearchList] = useState(false);
  const TitleArray=["video","anime","games","movie trailer","gameplays"].filter(q=>q.includes(searchQuery))
  return (
    <>
      <div className='SearchBar_container'>
        <div className='SearchBar_container2'>
            <div className='search_div'>
                <input type="text" className='iBox_SearchBar' placeholder='Search..'
                  onChange={e=>setsearchQuery(e.target.value)}
                  value={searchQuery}
                  onClick={e=>setsearchList(true)}
                />
                <FaSearch className='searchIcon_Searchbar' onClick={e=>setsearchList(false)}/>
                <BsMicFill className='mic_Searchbar'/>
                {searchQuery&& searchList1&&
                  <Searchlist setsearchQuery={setsearchQuery} TitleArray={TitleArray}/>
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar;