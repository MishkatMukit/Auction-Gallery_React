import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import './FavItems.css'
import FavItem from '../FavItem/FavItem';
const FavItems = ({ bidItems, handleRemoveItem, bidAmount }) => {
    // const [bidAmount, setBidAmount] = useState(0)
    return (
        <div className='fav-container w-1/3'>
            <div className=' bg-white rounded-xl'>
                <div className=' p-8  border-b-2 border-[#DCE5F3]'>
                    <h1 className='flex gap-3 text-3xl font-medium items-center justify-center'><FaRegHeart size={24} /> Favorite Items</h1>
                </div>
                <div>
                    {


                        bidItems.length ? bidItems.map(bidItem =>
                            <FavItem
                                handleRemoveItem={handleRemoveItem}
                                key={bidItem.id} bidItem={bidItem}></FavItem>

                        ) : (
                            <div className='space-y-2.5 text-center p-15'>
                                <h1 className='text-2xl font-semibold'>No favorites yet</h1>
                                <p className='text-lg'>Click the heart icon on any item to add it to your favorites</p>
                            </div>
                        )

                    }
                </div>
                <div className='p-8 flex justify-between border-t-2 border-[#DCE5F3]'>
                    <h4 className='text-2xl'>Total Bids Amount</h4>
                    <h4 className='text-2xl'>${bidAmount}</h4>
                </div>
            </div>
        </div>
    );
};

export default FavItems;