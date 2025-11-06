import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const CreateProduct = () => {
    const pushDataIntoBackend = (e) => {
        e.preventDefault();

        const newProduct = {
            title: e.target.productName.value,
            price_min: e.target.minPrice.value,
            price_max: e.target.maxPrice.value,
            email: e.target.email.value,
            category: e.target.cate.value,
            created_at: e.target.usageTime.value,
            image: e.target.photo.value,
            status: "pending",
            location: e.target.location.value,
            seller_image: e.target.sellerImg.value,
            seller_name: e.target.name.value,
            condition: "fresh",
            usage: "Brand new",
            description: e.target.des.value,
            seller_contact: e.target.contact.value
        };

        // console.log(newProduct);

       fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
       })
       .then(res => res.json())
       .then(data => {
        console.log("After posting - ", data);
        alert('posting is successfull')
       })
        

    }

    return (
        <div className='flex flex-col space-y-5 py-20 bg-[#f5f5f5]'>
            <a className='flex justify-center items-center text-2xl gap-2' href='/all-products'><FaArrowLeftLong /> Back To Products</a>
            <h2 className='text-6xl font-semibold text-center'>Create <span className='text-color'>A Product</span></h2>


            <form onSubmit={pushDataIntoBackend} className="w-2/4 mx-auto p-6 bg-white rounded-lg mt-10">
                {/* Title + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Yamaha Fz Guitar for Sale"
                            className="w-full border rounded px-3 py-2"
                            name="productName"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select className="w-full border rounded px-3 py-2" name='cate'>
                            <option>Select a Category</option>
                        </select>
                    </div>
                </div>

                {/* Prices */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block mb-1 font-medium">Min Price You want to Sale ($)</label>
                        <input
                            type="number"
                            placeholder="e.g. 18.5"
                            className="w-full border rounded px-3 py-2"
                            name="minPrice"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Max Price You want to Sale ($)</label>
                        <input
                            type="number"
                            placeholder="Optional (default = Min Price)"
                            className="w-full border rounded px-3 py-2"
                            name="maxPrice"
                        />
                    </div>
                </div>

                {/* Product Condition + Usage Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block mb-1 font-medium">Product Condition</label>
                        <div className="flex items-center gap-4 mt-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="condition" defaultChecked />
                                Brand New
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" name="condition" />
                                Used
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Product Usage time</label>
                        <input
                            type="text"
                            placeholder="e.g. 1 year 3 month"
                            className="w-full border rounded px-3 py-2"
                            name='usageTime'
                        />
                    </div>
                </div>

                {/* Product Image URL */}
                <div className="mt-4">
                    <label className="block mb-1 font-medium">Your Product Image URL</label>
                    <input
                        type="url"
                        placeholder="https://…"
                        className="w-full border rounded px-3 py-2"
                        name='photo'
                    />
                </div>

                {/* Seller Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block mb-1 font-medium">Seller Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Artisan Roasters"
                            className="w-full border rounded px-3 py-2"
                            name='name'
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Seller Email</label>
                        <input
                            type="email"
                            placeholder="e.g. name@email.com"
                            className="w-full border rounded px-3 py-2"
                            name='email'
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Seller Contact</label>
                        <input
                            type="text"
                            placeholder="e.g. +1-555-1234"
                            className="w-full border rounded px-3 py-2"
                            name='contact'
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Seller Image URL</label>
                        <input
                            type="url"
                            placeholder="https://…"
                            className="w-full border rounded px-3 py-2"
                            name='sellerImg'
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="mt-4">
                    <label className="block mb-1 font-medium">Location</label>
                    <input
                        type="text"
                        placeholder="City, Country"
                        className="w-full border rounded px-3 py-2"
                        name='location'
                    />
                </div>

                {/* Description */}
                <div className="mt-4">
                    <label className="block mb-1 font-medium">Simple Description about your Product</label>
                    <textarea
                        rows="4"
                        placeholder="e.g. I bought this product 3 month ago..."
                        className="w-full border rounded px-3 py-2"
                        name='des'
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button className="w-full py-3 rounded-md text-white font-semibold linear-bg"
                    >
                        Create A Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;