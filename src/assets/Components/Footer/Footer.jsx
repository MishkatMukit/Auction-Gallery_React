import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col justify-center items-center space-y-4 bg-base-100 p-12">
                <div>
                    <a className="text-3xl"><span className='text-[#003EA4] font-medium'>Auction</span><span className='text-[#FFD337] font-bold'>Gallery</span></a>
                </div>
                <div>
                    <h1 className='text-2xl font-medium'>Bid. Win. Own.</h1>
                </div>
                <nav className="flex gap-6 list-none font-medium text-lg">
                    <li><a href="">Home</a></li>
                    <li><a href="">Auction</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">How to work</a></li>
                </nav>
        <p className='text-lg'>Copyright © {new Date().getFullYear()} -AuctionHub. All rights reserved.</p>
            </footer > 
        </div >
    );
};

export default Footer;