import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
    <div className="p-4 bg-blue-500 w-30 h-screen ">
      <Link to={"/users"}><button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
        User
      </button></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard

