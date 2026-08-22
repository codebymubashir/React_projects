import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])
    return (
        <div className="w-full h-auto bg-gray-600">
            <h1 className="text-white frances text-5xl font-bold pt-5 pl-5 ">Users</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {users.map((user) => (
                    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-5" key={user.id}>
                        <h2 className='text-black frances font-bold text-xl uppercase underline'>{user.name}</h2>
                        <h2 className='text-gray-400 font-bold'>{user.username}</h2>
                        <p>{user.email}</p>
                        <p>{user.address.city}</p>

                       <Link to={`/user/${user.id}`}> <button className='btn w-full font-bold p-2 border border-black rounded-lg'>View Detail</button></Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Users
