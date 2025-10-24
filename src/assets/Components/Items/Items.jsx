import React, { useEffect, useState } from 'react';
import './items.css'
import Item from '../Item/Item';
import { FaRegHeart } from "react-icons/fa";

const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json').then(res => res.json()).then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div>
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
                        items.map(item =>(
                            
                            <tr>
                                <td className='flex items-center'> <img className='w-20 h-20 object-cover rounded-sm' src={item.image} alt="" /> <span className='text-lg pl-6 text-[#0E2954] text-left max-w-86'>{item.title}</span></td>
                                <td>${item.currentBidPrice}</td>
                                <td>${item.timeLeft}</td>
                                <td><button><FaRegHeart size={24} /></button></td>
                            </tr>
                            
                        )
                        
                            // <Item 
                            // key={item.id}
                            // image={item.image}
                            // title={item.title}
                            // currentBidPrice={item.currentBidPrice}
                            // timeLeft={item.timeLeft}></Item>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Items;