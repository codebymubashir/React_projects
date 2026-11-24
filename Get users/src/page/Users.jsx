import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Users</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-5">
            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500 mb-1">@{user.username}</p>
            <p className="text-sm text-gray-600 mb-1">{user.email}</p>
            <p className="text-sm text-gray-600 mb-4">{user.address.city}</p>

            <Link D>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                View User
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users