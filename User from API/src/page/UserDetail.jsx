import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    useGetUsersQuery,
    useGetCommentsByPostIdQuery,
    useGetTodosByUserIdQuery,
    useUpdateUserMutation,
} from '../page/JsonPlaceholderApi'
import UserFormModal from '../page/UserFormModal'

const UserDetail = () => {

    const { id } = useParams()
    const [showEdit, setShowEdit] = useState(false)

    const { data: users, isLoading: userLoading } = useGetUsersQuery();
    const { data: todos, isLoading: todosLoading } = useGetTodosByUserIdQuery(id);
    const { data: comments, isLoading: commentLoading } = useGetCommentsByPostIdQuery(id);
    const [updateUser] = useUpdateUserMutation();

    const loading = userLoading || todosLoading || commentLoading

    if (loading) return <h1>Loading</h1>

    const user = users?.find((u) => u.id === Number(id))

    if (!user) {
        return (
            <div className="w-full h-auto bg-gray-600 pt-5 min-h-screen">
                <Link to={"/"}>
                    <p className='text-white font-bold ml-15'>Back here</p>
                </Link>
                <h1 className="text-white text-center mt-10">User not found</h1>
            </div>
        )
    }

    const handleEdit = async (data) => {
        await updateUser({ id: user.id, ...data })
        setShowEdit(false)
    }

    // photos aur albums real API se fetch nahi ho rahe — picsum se locally generate kar rahe hain
    const photos = Array.from({ length: 12 }, (_, i) => ({
        id: `${id}-${i}`,
        title: `Photo ${i + 1}`,
    }))

    const albums = Array.from({ length: 6 }, (_, i) => ({
        id: `${id}-album-${i}`,
        title: `Album ${i + 1}`,
    }))

    return (
        <div className="w-full h-auto bg-gray-600 pt-5">

            <Link to={"/"}>
                <p className='text-white font-bold ml-15'>Back here</p>
            </Link>

            <div className="max-w-4xl mx-auto p-6">

                <div className="bg-white border rounded-2xl shadow-sm p-6 mb-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                            <p className="text-gray-500 mb-2">@{user.username}</p>
                        </div>
                        <button
                            onClick={() => setShowEdit(true)}
                            className="bg-[#3D5AFE] text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            Edit
                        </button>
                    </div>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
                    <p className="text-gray-600">{user.address?.city}</p>
                    <p className="text-gray-600">{user.company?.name}</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-white font-bold text-lg mb-2">Todos</h2>
                    {todos.map((todo) => (
                        <div key={todo.id} className="bg-white border rounded-lg p-3 flex items-center justify-between">
                            <span className="text-sm text-gray-700">{todo.title}</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${todo.completed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </div>
                    ))}

                    <h2 className="text-white font-bold text-lg mb-2 mt-6">Comments</h2>
                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-white border rounded-lg p-3">
                            <h3 className="text-sm font-semibold text-gray-800">{comment.name}</h3>
                            <p className="text-xs text-gray-500 mb-1">{comment.email}</p>
                            <p className="text-sm text-gray-600">{comment.body}</p>
                        </div>
                    ))}

                    <h2 className="text-white font-bold text-lg mb-2 mt-6">Albums</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {albums.map((album) => (
                            <div key={album.id} className="bg-white border rounded-lg p-3">
                                <p className="text-sm text-gray-700">{album.title}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-white font-bold text-lg mb-2 mt-6">Photos</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {photos.map((photo) => (
                            <div key={photo.id} className="bg-white border rounded-lg p-3">
                                <img
                                    src={`https://picsum.photos/seed/${photo.id}/200/150`}
                                    alt={photo.title}
                                    className="w-full h-32 object-cover rounded-md"
                                />
                                <p className="text-xs text-gray-600 mt-2 line-clamp-2">{photo.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showEdit && (
                <UserFormModal
                    title="Edit User"
                    initialUser={user}
                    onSubmit={handleEdit}
                    onClose={() => setShowEdit(false)}
                />
            )}
        </div>
    )
}

export default UserDetail