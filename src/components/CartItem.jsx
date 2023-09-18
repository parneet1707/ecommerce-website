import React from 'react'
import toast from 'react-hot-toast';
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';



const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();
    const removefromCart = () => {
        dispatch(remove(item.id));
        toast.success("item remove")
      
    }
  return (
    <div>
        <div className='flex  border-b-4 border-black mt-[20px]   '>
            <div>
                <img  src={item.image} height={400} width={300}/>
            </div>
            <div className='item-center justify-around flex flex-col'>
                <h1 className='font-bold text-2xl '>{item.title}</h1>
                <h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
                <div className='flex justify-between text-green-800 text-3xl'>
                    ${item.price}
                    <div className='text-4xl' onClick={removefromCart}>
                        <FcDeleteDatabase />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
