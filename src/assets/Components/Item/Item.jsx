import React from 'react';
import './Item.css'
const Item = ({ title, image, currentBidPrice, timeLeft }) => {
    return (
        <tr className='border'>
            <td className='flex'><img className='w-20 h-20 object-cover' src={image} alt="" />{title}</td>
            <td>{currentBidPrice}</td>
            <td>{timeLeft}</td>
        </tr>

    );
};

export default Item;