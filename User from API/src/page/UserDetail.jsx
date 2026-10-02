import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    useGetUsersByIdQuery,
    useGetCommentsByPostIdQuery,
    useGetTodosByUserIdQuery,
} from './JsonPlaceholderApi'

const UserDetail = () => {

    const { id } = useParams()

    const { data: user, isLoading: userLoading } = useGetUsersByIdQuery(id);
    const { data: todos, isLoading: todosLoading } = useGetTodosByUserIdQuery(id);
    const { data: comments, isLoading: commentLoading } = useGetCommentsByPostIdQuery(id);

    const loading = userLoading || todosLoading || commentLoading

    if (loading) return <h1>Loading</h1>

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

                {user.map((u) => (
                    <div key={u.id} className="bg-white border rounded-2xl shadow-sm p-6 mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">{u.name}</h1>
                        <p className="text-gray-500 mb-2">@{u.username}</p>
                        <p className="text-gray-600">{u.email}</p>
                        <p className="text-gray-600">{u.phone}</p>
                        <p className="text-gray-600">{u.company.name}</p>
                    </div>
                ))}

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

        </div>
    )
}

export default UserDetail