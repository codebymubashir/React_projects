import React from 'react'
import UserDetail from './page/UserDetail'
import Users from './page/Users'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>


      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
      
    </div>
  )
}

export default App
