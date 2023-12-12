import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home/home';
import Explore from '../pages/Explore/explore';
import Subscription from '../pages/Subscription/subscription';
import Library from '../pages/Library/library';

function Allrouters() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explore' element={<Explore />}/>
        <Route path='/subscription' element={<Subscription />}/>
        <Route path='/library' element={<Library />}/>
    </Routes>
  )
}

export default Allrouters;