import React, { useEffect, useState } from "react";
import axios from "axios";

const Homes = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState(false);

  const API = "https://jsonplaceholder.typicode.com/users";

  // GET USERS
  const getUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // DELETE USER
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);

      const newUsers = users.filter((item) => item.id !== id);
      setUsers(newUsers);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD USER
  const handleSubmit = async (e) => {
    e.preventDefault();



    if (ID) {

      let updatuser= {name ,email}

      const usersdata  = users.map((p)=>p.id===ID?updatuser:p)
      setUsers(usersdata)

      console.log(usersdata);
      
      
    }
return



    const newUser = {
      id: users.length + 1,
      name,
      email,
      phone: "N/A",
      website: "N/A",
    };

    try {
      await axios.post(API, newUser);

      setUsers([...users, newUser]);

      // Clear inputs
      setName("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };



  const handleedit=(u)=>{
    console.log(u);
    setEmail(u.email)
    setName(u.name)
    setID(u.id)
    

  }

  return (
    <>
      {/* Form */}
      <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-5">Add User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-semibold">Name</label>

            <input
              type="text"
              className="w-full border rounded-lg p-2 mt-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <input
              type="email"
              className="w-full border rounded-lg p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
           {ID?"update user": "add user"}
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <h1 className="text-3xl font-bold">Users List</h1>
            <p className="text-blue-100 mt-1">
              Manage your users with React CRUD
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Website</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-blue-50"
                  >
                    <td className="px-6 py-4 font-semibold">{item.name}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.website}</td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleedit(item)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homes;