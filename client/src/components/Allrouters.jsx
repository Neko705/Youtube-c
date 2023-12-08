import React from 'react'
import Home from '../pages/Home/home';
import { Route, Routes, Link } from 'react-router-dom';

function Allrouters() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default Allrouters;