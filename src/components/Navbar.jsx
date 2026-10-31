import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className='bg-(--c2) w-full h-13 flex justify-between align-center p-2'>
            <h2 className='text-2xl font-bold text-(--c4)'>MediaSearch</h2>

            <div className='w-45 h-8 flex justify-between align-center '>
                <Link to="/" className='w-20 bg-red-600 flex justify-center align-center active:scale(95) rounded'>Search</Link>
                <Link to="/collection" className='w-20 bg-red-600 flex justify-center align-center active:scale(95) rounded'>Collection</Link>
            </div>
        </div>


    )
}

export default Navbar
