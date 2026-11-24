import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './page/Users'
import UserDetail from './page/UserDetail'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  )
}

export default App
