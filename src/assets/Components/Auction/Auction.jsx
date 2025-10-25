import React, { useState } from 'react';
import Items from '../Items/Items';
import FavItems from '../FavItems/FavItems';
import { ToastContainer, toast } from 'react-toastify';

const Auction = () => {
    const [bidItems, setBidItems] = useState([])
    const [disabledID, setDisabledID] = useState([])
    const [bidAmount, setBidAmount] = useState(0)
        const handleRemoveItem = (bidItem) => {
            const newBidItems = bidItems.filter(b => b !== bidItem)
            setBidItems(newBidItems)
            console.log(bidItem.id)
            const newDisabledID = disabledID.filter(id => id !== bidItem.id)
            console.log(newDisabledID)
            setDisabledID(newDisabledID)
            setBidAmount(bidAmount- Number(bidItem.currentBidPrice))
        }
    const handleBidItems = (item) => {
        const exists = bidItems.some(b => b.id === item.id)
        if (!exists) {
            setBidAmount(bidAmount+ Number(item.currentBidPrice))
            setBidItems([...bidItems, item])
            setDisabledID([...disabledID, item.id])
            toast("One item added to Favorite Items!")
        }
    }

    // console.log(bidItems)
    // console.log(items)
    return (
        <div className='max-w-[1400px] mx-auto py-20 '>
            <div className='py-10'>
                <h1 className='text-3xl text-[#0E2954]'>Active Auctions</h1>
                <p className='text-lg'>Discover and bid on extraordinary items</p>
            </div>
            <div className='flex gap-6'>
                <Items handleBidItems={handleBidItems}
                    disabledID={disabledID}></Items>
                <FavItems
                    handleRemoveItem={handleRemoveItem}
                    bidItems={bidItems}
                    bidAmount={bidAmount}></FavItems>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Auction;