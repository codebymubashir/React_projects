import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const UserDetail = () => {

    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [todos, setTodos] = useState([])
    const [comments, setComments] = useState([])
    const [albums, setAlbums] = useState([])
    const [activeTab, setActiveTab] = useState("todos")


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data))

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
            .then((res) => res.json())
            .then((data) => setTodos(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
            .then((res) => res.json())
            .then((data) => setComments(data))

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then((res) => res.json())
            .then((data) => setAlbums(data))
    }, [id])



    if (!user) return <h2 className="p-6 text-lg">Loading...</h2>

    return (
        <div className="w-full h-auto bg-gray-600">

            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white border rounded-2xl shadow-sm p-6 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-500 mb-2">@{user.username}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
                    <p className="text-gray-600">{user.company.name}</p>
                </div>

                <div className="flex gap-3 mb-6">
                    {["todos", "comments", "albums"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${activeTab === tab
                                    ? "bg-indigo-600 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="space-y-3">

                    {activeTab === "todos" && todos.map((todo) => (
                        <div key={todo.id} className="bg-white border rounded-lg p-3 flex items-center justify-between">
                            <span className="text-sm text-gray-700">{todo.title}</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${todo.completed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                {todo.completed ? "Completed" : "Pending"}
                            </span>
                        </div>
                    ))}

                    {activeTab === "comments" && comments.map((comment) => (
                        <div key={comment.id} className="bg-white border rounded-lg p-3">
                            <h3 className="text-sm font-semibold text-gray-800">{comment.name}</h3>
                            <p className="text-xs text-gray-500 mb-1">{comment.email}</p>
                            <p className="text-sm text-gray-600">{comment.body}</p>
                        </div>
                    ))}

                    {activeTab === "albums" && albums.map((album) => (
                        <div key={album.id} className="bg-white border rounded-lg p-3">
                            <p className="text-sm text-gray-700">{album.title}</p>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}

export default UserDetail
