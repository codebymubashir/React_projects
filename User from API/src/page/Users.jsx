import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    useGetUsersQuery,
    useDeleteUserMutation,
    useAddUserMutation,
} from '../page/JsonPlaceholderApi'
import UserFormModal from '../page/UserFormModal'

const Users = () => {

    const { data: users, isLoading, error } = useGetUsersQuery();
    const [deleteUser] = useDeleteUserMutation();
    const [addUser] = useAddUserMutation();
    const [showAdd, setShowAdd] = useState(false);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(id)
        }
    }

    const handleAdd = async (data) => {
        await addUser(data)
        setShowAdd(false)
    }

    if (isLoading) return <h1>Loading</h1>

    if (error) return <h1>Error</h1>

    return (
        <div className="w-full h-auto bg-gray-600">
            <div className="flex items-center justify-between pr-10">
                <div>
                    <h1 className="text-white frances text-5xl font-bold pt-5 pl-5 ">Users</h1>
                    <p className='text-white text-base font-bold ml-6 mt-2'>You will get all users from here</p>
                </div>
                <button
                    onClick={() => setShowAdd(true)}
                    className="bg-[#3D5AFE] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    + Add User
                </button>
            </div>

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
                                <p className="text-sm font-medium">{user.address?.city}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link to={`/user/${user.id}`} className="flex-1">
                                <button className="w-full font-semibold p-2.5 bg-[#3D5AFE] text-white rounded-lg hover:bg-indigo-700 transition-colors">
                                    View Detail
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="font-semibold px-4 p-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showAdd && (
                <UserFormModal
                    title="Add User"
                    onSubmit={handleAdd}
                    onClose={() => setShowAdd(false)}
                />
            )}
        </div>
    )
}

export default Users