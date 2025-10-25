import React, { useState } from 'react';
import Items from '../Items/Items';
import FavItems from '../FavItems/FavItems';
import { ToastContainer, toast } from 'react-toastify';

const Auction = () => {
    const [bidItems, setBidItems] = useState([])
    const [disabledID, setDisabledID]= useState([])
    const handleBidItems = (item) => {
        const exists = bidItems.some(b=>b.id === item.id)
        if(!exists){
            setBidItems([...bidItems, item])
            setDisabledID([...disabledID, item.id])
            toast("One item added to Favorite Items!")
        }
    }
    
    console.log(bidItems)
    // console.log(items)
    return (
        <div className='max-w-[1400px] mx-auto my-32 '>
            <div className='my-10'>
                <h1 className='text-3xl text-[#0E2954]'>Active Auctions</h1>
                <p className='text-lg'>Discover and bid on extraordinary items</p>
            </div>
            <div className='flex gap-6'>
                <Items handleBidItems={handleBidItems}
                disabledID={disabledID}></Items>
                <FavItems bidItems={bidItems}></FavItems>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Auction;