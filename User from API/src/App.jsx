import React from 'react'
import UserDetail from './page/UserDetail'
import Users from './page/Users'
import { Routes,Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './page/store'

const App = () => {
  return (
    <Provider store={store}>
    <div>


      <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
      
    </div>
    </Provider>
  )
}

export default App
