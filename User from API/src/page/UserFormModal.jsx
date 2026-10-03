import React, { useState } from 'react'

const UserFormModal = ({ title, initialUser, onSubmit, onClose }) => {
  const [form, setForm] = useState({
    name: initialUser?.name ?? '',
    username: initialUser?.username ?? '',
    email: initialUser?.email ?? '',
    phone: initialUser?.phone ?? '',
    city: initialUser?.address?.city ?? '',
    company: initialUser?.company?.name ?? '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      address: { city: form.city },
      company: { name: form.company },
    })
  }

  const fields = [
    { name: 'name', label: 'Name' },
    { name: 'username', label: 'Username' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone' },
    { name: 'city', label: 'City' },
    { name: 'company', label: 'Company' },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 w-full max-w-md flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold text-[#1B1F24]">{title}</h2>

        {fields.map((f) => (
          <div key={f.name}>
            <label className="text-xs text-[#6B7280]">{f.label}</label>
            <input
              name={f.name}
              type={f.type || 'text'}
              value={form[f.name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
            />
          </div>
        ))}

        <div className="flex gap-2 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full p-2.5 border border-gray-300 rounded-lg font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full p-2.5 bg-[#3D5AFE] text-white rounded-lg font-semibold hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserFormModal