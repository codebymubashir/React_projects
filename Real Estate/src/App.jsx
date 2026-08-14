import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Contact from './page/Contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default App
