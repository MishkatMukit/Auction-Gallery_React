import React from 'react';
import './Item.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";   
const Item = ({ item , handleBidItems, isDisabled }) => {
    const {title, currentBidPrice, timeLeft, image} = item
    return (

        <tr>
            <td className='flex items-center'> <img className='w-20 h-20 object-cover rounded-sm' src={image} alt="" /> <span className='text-lg pl-6 text-[#0E2954] text-left max-w-86'>{title}</span></td>
            <td>${currentBidPrice}</td>
            <td>${timeLeft}</td>
            <td><button aria-pressed={isDisabled}  onClick={()=>handleBidItems(item) }>
               {        
                 isDisabled? <FaHeart color='red' size={24}/>:<FaRegHeart size={24}/>
               } 
               
               </button></td>
        </tr>


    );
};

export default Item;