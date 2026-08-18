import React, { useState } from 'react'
import Products from './Products'

const Pagination = () => {

    const properties = [
        {
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
            title: "The Cantt Residence",
            subtitle: "Model Town Bahawalpur",
            btn1: "4 Beds",
            btn2: "3 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop",
            title: "Vane Court Apartments",
            subtitle: "Satellite Town, Bahawalpur",
            btn1: "2 Beds",
            btn2: "2 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=900&auto=format&fit=crop",
            title: "Aldergate Corner Plot",
            subtitle: "DHA Phase 2, Bahawalpur",
            btn1: "4 Beds",
            btn2: "2 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
            title: "The Cantt Residence",
            subtitle: "Model Town Bahawalpur",
            btn1: "4 Beds",
            btn2: "3 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900&auto=format&fit=crop",
            title: "Vane Court Apartments",
            subtitle: "Satellite Town, Bahawalpur",
            btn1: "2 Beds",
            btn2: "2 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=900&auto=format&fit=crop",
            title: "Aldergate Corner Plot",
            subtitle: "DHA Phase 2, Bahawalpur",
            btn1: "4 Beds",
            btn2: "2 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900&auto=format&fit=crop",
            title: "Garden Town Villa",
            subtitle: "Garden Town, Bahawalpur",
            btn1: "5 Beds",
            btn2: "4 Baths",
            btn3: "12 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=900&auto=format&fit=crop",
            title: "The Marchbank House",
            subtitle: "Model Town Bahawalpur",
            btn1: "3 Beds",
            btn2: "2 Baths",
            btn3: "7 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
            title: "Ashworth Farmhouse",
            subtitle: "Yazman Road, Bahawalpur",
            btn1: "6 Beds",
            btn2: "5 Baths",
            btn3: "2 Kanal"
        },
        {
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop",
            title: "Kingsley Court Apartments",
            subtitle: "Satellite Town, Bahawalpur",
            btn1: "3 Beds",
            btn2: "2 Baths",
            btn3: "8 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
            title: "The Hollowmere Residence",
            subtitle: "DHA Phase 3, Bahawalpur",
            btn1: "5 Beds",
            btn2: "4 Baths",
            btn3: "1 Kanal"
        },
        {
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=900&auto=format&fit=crop",
            title: "Pemberton Street Corner Plot",
            subtitle: "Model Town Bahawalpur",
            btn1: "4 Beds",
            btn2: "3 Baths",
            btn3: "10 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=900&auto=format&fit=crop",
            title: "Wrenfield Cottage",
            subtitle: "Officers Colony, Bahawalpur",
            btn1: "3 Beds",
            btn2: "2 Baths",
            btn3: "5 Marla"
        },
        {
            image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=900&auto=format&fit=crop",
            title: "The Alderwood Manor",
            subtitle: "Cantt, Bahawalpur",
            btn1: "6 Beds",
            btn2: "5 Baths",
            btn3: "1.5 Kanal"
        },
        {
            image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=900&auto=format&fit=crop",
            title: "Fenwick Heights Apartments",
            subtitle: "Satellite Town, Bahawalpur",
            btn1: "2 Beds",
            btn2: "2 Baths",
            btn3: "6 Marla"
        }
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const totalPages = Math.ceil(properties.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = properties.slice(startIndex, startIndex + itemsPerPage)

    const goToPage = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className='px-5 sm:px-8 md:px-16 py-16 max-w-7xl mx-auto'>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {currentItems.map((property, index) => (
                    <Products
                        key={index}
                        image={property.image}
                        title={property.title}
                        subtitle={property.subtitle}
                        btn1={property.btn1}
                        btn2={property.btn2}
                        btn3={property.btn3}
                    />
                ))}
            </div>

            <div className='flex justify-center items-center gap-3 mt-12'>
                <button
                    onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='px-4 py-2 border rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-all'
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-9 h-9 rounded-full transition-all ${
                            currentPage === page
                                ? "bg-[#07271F] text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='px-4 py-2 border rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-all'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination