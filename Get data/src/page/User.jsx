import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const User = () => {

  const [product, setProducts] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Products here</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
          >
            {/* Image */}
            <div className="bg-gray-50 rounded-xl flex items-center justify-center h-40 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-28 h-28 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Category tag */}
            <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wide mb-1">
              {product.category}
            </span>

            {/* Title */}
            <h2 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 flex-grow">
              {product.title}
            </h2>

            {/* Price */}
            <p className="text-lg font-bold text-gray-900 mb-3">
              ${product.price}
            </p>

            {/* Button */}
            <Link to={`/product/${product.id}`}>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
