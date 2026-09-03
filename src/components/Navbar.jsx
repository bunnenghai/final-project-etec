import React from 'react'
import { FaRegUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full h-20 bg-warning flex justify-between px-3 sticky-top'>
            <div className='text-xl font-semibold flex items-center gap-2.5'>
                <a href="#home" className='text-black text-decoration-none'><div className='hover:text-red-500'>Home</div></a>
                <a href="#popular" className='text-black text-decoration-none'><div className='hover:text-red-500'>Popular</div></a>
                <a href='#food' className='text-black text-decoration-none'><div className='hover:text-red-500'>Food</div></a>
                <a href='#drink' className='text-black text-decoration-none'><div className='hover:text-red-500'>Drink</div></a>
                <a href='#about' className='text-black text-decoration-none'><div className='hover:text-red-500'>About</div></a>
                <a href='#contact' className='text-black text-decoration-none'><div className='hover:text-red-500'>Contact</div></a>
            </div>
            <div className='text-2xl font-semibold flex items-center'>
                <img className='w-20' src="/image/logo.png" alt="" />
            </div>
            <div className='flex items-center justify-end gap-3'>
                <input className='border border-black w-50 h-8 rounded-md outline-0 ps-2' type="text" placeholder='search...' />

                <Link to={'/cartpage'} className='text-black'>
                    <FaShoppingCart />
                </Link>

                <Link to={'/login'} className='text-black'>
                    <FaRegUser />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
