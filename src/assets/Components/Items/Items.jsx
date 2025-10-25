import React, { useEffect, useState } from 'react';
import './items.css'
import Item from '../Item/Item';
import { FaRegHeart } from "react-icons/fa";

const Items = ({handleBidItems, disabledID}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => setItems(data))
    }, [])

    return (
        <div className='w-2/3'>
            <table className='bg-white '>
                <thead>
                    <tr>
                        <th className='text-left!'>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <Item key={item.id}
                                item={item}
                                handleBidItems={handleBidItems}
                                isDisabled={disabledID.includes(item.id)}></Item>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Items;