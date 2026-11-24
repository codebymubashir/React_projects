import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Contact from './page/Contact';
import Journal from './page/Journal';
import { useEffect } from 'react';

const App = () => {


  useEffect(()=>{

    fetch("http://localhost:3300").then((res)=>{
      const data = res.json()
    }).then((data)=>{
      console.log(data)
    })

  },[])
  return (
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/contact' element={<Contact/>} />
    //   <Route path='/journal' element={<Journal/>} />
    // </Routes>

  
  )
}

export default App
