import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../../Products.json"

const ProductDetails = () => {
    const {id} = useParams();
    const singleProduct = Products?.filter((product)=>product.id == id)
    // console.log(singleProduct)
  return (
    <div>
        
        {
            singleProduct?.map((product)=>{
                return <div key={product.id} className='h-screen flex justify-center items-center mx-10'>
                    <div className='w-1/2'>
                        <img className='w-96 h-96 hover:scale-110 duration-300 transition ease-in-out cursor-pointer' src={product.image} alt="product" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-2xl font-bold'>{product.name}</h1>
                        <p className='text-justify'>{product.description}</p>
                        <p className='text-xl font-bold'>Price : ${product.price}</p>
                        <button className="bg-blue-500 text-white py-1 px-4 rounded-lg text-xl font-bold transition ease-in-out duration-300 mt-2">Add To Cart</button>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default ProductDetails