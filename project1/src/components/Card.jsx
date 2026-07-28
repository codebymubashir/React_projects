import React from 'react'

const Card = ({title,dis}) => {
    return (
        <div>


            <div className='h-44 w-44 bg-amber-100'>
                <img src="" alt="" />
                <h1>{title}</h1>
                <p>{dis}</p>
            </div>

        </div>
    )
}

export default Card
