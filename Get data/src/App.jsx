import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from './page/User'
import Dashboard from './components/Dashboard'
import Detailproduct from './page/Detailproduct'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/product/:id" element={<Detailproduct />} />
    </Routes>
  )
}

export default App