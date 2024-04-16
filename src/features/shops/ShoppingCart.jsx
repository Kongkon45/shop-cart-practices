import React from 'react'
import Products from "../../Products.json"
import Product from './Product'

const ShoppingCart = () => {
    // console.log(Products)
  return (
    <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-6 my-5 mx-5'>
        {
            Products && Products?.map((product)=>{
                return <Product key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default ShoppingCart