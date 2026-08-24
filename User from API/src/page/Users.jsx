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
            <p className='text-white text-base font-bold ml-6 mt-2'>You will get all users from here</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-center gap-4">
                            <div className="text-[#3D5AFE] bg-[#EEF1FF] h-12 w-12 flex justify-center items-center rounded-full font-bold text-lg shrink-0">
                                {user.id}
                            </div>

                            <div>
                                <h2 className="text-lg font-bold text-[#1B1F24]">{user.name}</h2>
                                <p className="text-sm text-[#6B7280]">@{user.username}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>
                                <p className="text-[#6B7280] text-xs">Email</p>
                                <p className="text-sm font-medium">{user.email}</p>
                            </div>
                            <div>
                                <p className="text-[#6B7280] text-xs">Location</p>
                                <p className="text-sm font-medium">{user.address.city}</p>
                            </div>
                        </div>
                        <Link to={`/user/${user.id}`}>
                            <button className="w-full font-semibold p-2.5 bg-[#3D5AFE] text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                View Detail
                            </button>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Users
