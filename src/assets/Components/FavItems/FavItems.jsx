import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import './FavItems.css'
const FavItems = () => {
    return (
        <div className='fav-container w-1/3'>
            <div className=' bg-white rounded-xl'>
                <div className=' p-8  border-b-2 border-[#DCE5F3]'>
                    <h1 className='flex gap-3 text-3xl font-medium items-center justify-center'><FaRegHeart size={24} /> Favorite Items</h1>
                </div>
                <div className='p-8 flex justify-between'>
                    <h4 className='text-2xl'>Total Bids Amount</h4>
                    <h4  className='text-2xl'>$00000</h4>
                </div>
            </div>
        </div>
    );
};

export default FavItems;