import React from 'react';
import { FiDelete } from "react-icons/fi";
const FavItem = ({ bidItem }) => {
    const { image, title, bidsCount, currentBidPrice } = bidItem
    return (
        <div className='px-3 py-2 text-[#0E2954] '>
            <div className='p-2 rounded-md flex gap-6 bg-[#EDF2F9]'>
                <img className='w-20 h-20 object-cover rounded-sm' src={image} alt="" />
                <div className='space-y-2'>
                    <div className='flex justify-between items-start'>
                        <h1 className='overflow-hidden'>{title}</h1>
                        <button><FiDelete className='text-red-600' size={24} /></button>
                    </div>
                    <div className='flex gap-6'>
                        <p>${currentBidPrice}</p>
                        <p>Bids : {bidsCount}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FavItem;