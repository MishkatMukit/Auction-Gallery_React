import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[620px]"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/vmJRjPNt/Banner-min.jpg)",
                    backgroundPosition: "bottom right",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* https://postimages.org/ */}
                <div className="hero-overlay"></div>
                <div className=" text-neutral-content w-[1400px]">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5 text-2xl font-light">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn bg-white rounded-full text-xl">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;