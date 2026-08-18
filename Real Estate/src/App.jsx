import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Contact from './page/Contact';
import Journal from './page/Journal';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/journal' element={<Journal/>} />
    </Routes>
  )
}

export default App
