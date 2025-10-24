import React from 'react';
import Items from '../Items/Items';
import FavItems from '../FavItems/FavItems';

const Auction = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-32 '>
            <div className='my-10'>
                <h1 className='text-3xl text-[#0E2954]'>Active Auctions</h1>
                <p className='text-lg'>Discover and bid on extraordinary items</p>  
            </div>
            <div className='flex gap-6'>
                <Items></Items>
                <FavItems></FavItems>
            </div>
        </div>
    );
};

export default Auction;