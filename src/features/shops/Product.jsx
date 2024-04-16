import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "./shopsSlice";


const Product = ({ product }) => {
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
        dispatch(addCart(product))
    }
  const { id, name, image, price, description } = product;
  return (
    <div className="border-2 rounded-lg p-4 shadow-lg ">
      <img className="h-40 w-40" src={image} alt="product-image" />
      <div className="text-center">
        <Link to={`/shop/${name}/${id}`}><h3 className="text-2xl font-bold ">{name}</h3></Link>
        <p className="text-xl font-semibold">Price : {price}</p>
        <button onClick={()=>handleAddToCart(product)} className="bg-blue-500 text-white py-1 px-4 rounded-lg text-xl font-bold transition ease-in-out duration-300 mt-2">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
