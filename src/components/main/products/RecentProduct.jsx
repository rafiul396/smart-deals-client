import React from 'react';

const RecentProduct = ({ pro }) => {
    return (
        <div className="card bg-base-100 shadow-sm p-4 rounded-xl space-y-3 text-black">
            <figure>
                <img
                    className='rounded-xl'
                    src={pro.image}
                    alt="Shoes" />
            </figure>
            <div>
                <h2 className="card-title text-xl">{pro.title} [ {pro.condition} ]</h2>
                <p>$ <span>{pro.price_min}</span> - <span>{pro.price_max}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full text-color text-xl border-2 rounded-lg border-[#9F62F2]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default RecentProduct;