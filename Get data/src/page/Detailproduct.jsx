import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detailproduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [id])

    if (!product) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex">

                {/* Image Section */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-64 h-64 object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                        {product.category}
                    </span>

                    <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">
                        {product.title}
                    </h1>

                    <p className="text-3xl font-extrabold text-gray-900 mb-4">
                        ${product.price}
                    </p>

                    {product.rating && (
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-yellow-500 text-lg">★★★★★</span>
                            <span className="text-sm text-gray-500">
                                ({product.rating.rate} / {product.rating.count} reviews)
                            </span>
                        </div>
                    )}

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {product.description}
                    </p>

                    <button className="w-full md:w-fit bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Detailproduct
