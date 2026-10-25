import React, { useState } from 'react'
import { useGetPostsQuery, useNewPostsMutation } from './api'
import PostCard from './components/postCard';
const App = () => {


  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  console.log(isLoading, isError, isSuccess, data, error);



  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const newPost = useNewPostsMutation()[0];
    const submitHandler = (e)=>{
    e.preventDefault()

    const post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000
    }
    newPost(post)
    setTitle("")
    setBody("")
  }




return (
  <div>
    hello

    <form onSubmit={submitHandler}>
      <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
      <button type='submit'>Add</button>
    </form>


    {
      data?.map((item) => {
        return <PostCard key={item.id} title={item.title} body={item.body} />
      })
    }
  </div>
)
}

export default App
