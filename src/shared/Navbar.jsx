import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const carts = useSelector((state)=>state.carts.carts)
  return (
    <div>
        <nav className='bg-blue-500 text-white flex justify-center items-center gap-10 h-12'>
            <Link className='text-2xl font-bold ' to='/'>Home</Link>
            <Link className='text-2xl font-bold ' to='/shop'>Shop</Link>
            <Link className='text-2xl font-bold ' to='/carts'>Carts <span>{carts.length}</span></Link>
        </nav>
    </div>
  )
}

export default Navbar