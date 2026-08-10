import React, { useState } from "react";

const Homes = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleDelete = (id) => {
    const newPosts = posts.filter((item) => item.id !== id);
    setPosts(newPosts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedPost = { id: editId, title, subtitle, paragraph, image };
      const newPosts = posts.map((p) =>
        p.id === editId ? updatedPost : p
      );
      setPosts(newPosts);
    } else {
      const newPost = {
        id: posts.length + 1,
        title,
        subtitle,
        paragraph,
        image,
      };
      setPosts([...posts, newPost]);
    }

    setTitle("");
    setSubtitle("");
    setParagraph("");
    setImage("");
    setEditId(null);
    setIsOpen(false);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setSubtitle(post.subtitle);
    setParagraph(post.paragraph);
    setImage(post.image);
    setEditId(post.id);
    setIsOpen(true);
  };

  return (
    <>
      <div className="p-6">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold">
          + Add New Post
        </button>
      </div>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 z-40"/>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-yellow-400 shadow-2xl z-50 p-8 overflow-y-auto transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">
            {editId ? "Update Post" : "Add new post"}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold text-lg">Title</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1 bg-yellow-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Subtitle</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1 bg-yellow-300"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Paragraph</label>
            <textarea
              className="w-full border rounded-lg p-2 mt-1 bg-yellow-300"
              rows="4"
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-lg">Image URL</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1 bg-yellow-300"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button className="bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-full w-full font-semibold">
            {editId ? "Update Post" : "Add Post"}
          </button>
        </form>
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>

          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <h4 className="text-lg text-gray-500 mb-3">
                  {post.subtitle}
                </h4>
                <p className="text-gray-700">{post.paragraph}</p>

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homes;