import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeCart } from './shopsSlice'

const Carts = () => {
    const productsItem = useSelector((state)=>state.carts.carts)
    const dispatch = useDispatch()
    const handleRemoveCart = (product)=>{
        dispatch(removeCart(product))
    }
    const handleIncrement = (product)=>{
        dispatch(incrementQuantity(product))
    }
    const handleDecrement = (product)=>{
        dispatch(decrementQuantity(product))
    }

    const totalPrice = productsItem.reduce((total, item)=> total + (item.quantity * item.price), 0)
  return (
    <div>
        <ul className='w-1/2 mx-auto'>
            {
                productsItem?.map((product)=>{
                    return <li key={product.id} className='flex justify-center items-center gap-6 border-2 my-2 rounded-lg '>
                        <img className='w-10 h-10' src={product.image} alt="product image" />
                        <h3>{product.name}</h3>
                        <button onClick={()=>handleIncrement(product)} className="bg-green-500 text-white py-2 px-4 rounded-lg text-xl font-bold transition ease-in-out duration-300 my-2">+</button>
                        <p>{product.quantity}</p>
                        <button onClick={()=>handleDecrement(product)} className="bg-orange-500 text-white py-2 px-4 rounded-lg text-xl font-bold transition ease-in-out duration-300 my-2">-</button>
                        <button onClick={()=>handleRemoveCart(product)} className="bg-red-500 text-white py-2 px-4 rounded-lg text-xl font-bold transition ease-in-out duration-300 my-2">Remove</button>
                        <p>{product.price}</p>
                    </li>
                })
            }
        </ul>
        <p className='text-right mr-[400px] text-2xl font-bold'>total Price : ${totalPrice}</p>
    </div>
  )
}

export default Carts