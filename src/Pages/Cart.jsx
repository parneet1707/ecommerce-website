import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce ((acc,curr) => acc+ curr.price,0));
    },[cart])
  return (
    <div >
     
      {
        cart.length>0 ?
        (<div className='flex max-w-[50%]   space-x-20 mx-auto'>
           <div className=''>
            {
                cart.map( (item,index) => {
                    return <CartItem key={item.id} item={item} itemIndex = {index}/> 

                })
            }
          
      </div>
          <div className='flex flex-col justify-around'>
          <div className=''>
            <div className='text-green-800 text-2xl font-bold'>Your Cart</div>
            <div className='text-green-800 text-3xl font-bold'>Summary</div>
            <p>
                <span className='font-bold'>Total Items : {cart.length}</span>
            </p>
            </div>
         
           <div>
            <p className='font-bold'>Total Amount :<span className='text-green-500 '> ${totalAmount}</span></p>
            <button className='text-white bg-green-600 rounded-sm  font-bold p-3 w-30px'>CheckOut Now</button>
          
           </div>
        </div>
          </div>) :
       (<div className='flex    flex-col   space-y-3  mx-auto w-[10%]  mt-[380px]  '>
        <h1 className='font-bold  text-xl'>Cart Empty</h1>
       <Link to={"/"}>
        <button className='text-white  bg-green-600 rounded-sm  font-bold p-3 w-30px'>
            Shop Now
        </button>
       </Link>
       </div>)
       

    }
           
    </div>
  )
}

export default Cart
