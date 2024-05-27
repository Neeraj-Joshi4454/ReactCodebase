import React from 'react'

function Card({val, star}) {
    return (
        <div className="border w-72 m-5 h-[500px] rounded-lg shadow-md">
            <img src={val.cover} className="w-[100%] h-[350px] rounded-t-lg" alt={val.title} />
            <div className="p-3">
                <h1 className="text-4xl font-sans">{val.title}</h1>
                <p className="text-gray-600 my-3">{star}</p>
                <a href={val.link} className="w-20 h-20 border p-2 bg-black text-white rounded-lg shadow-md">Watch Now</a>
            </div>
        </div>
    )
}

export default Card