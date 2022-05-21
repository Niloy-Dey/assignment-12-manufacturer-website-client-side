import React, { useEffect, useState } from 'react';
import rating from '../../assets/rating.ico'
const AllTools = () => {


    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    return (

        <div className='bg-slate-100 py-24  px-10 '>

            <h1 className='text-4xl  font-bold  text-orange-400 text-center '>Our Tools</h1>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider mx-60 "></div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    tools.map(tool => {
                        const { Image, Name, Price, Description, Quantity } = tool;

                        return (
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-40 w-full" src={Image} alt="" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        {Name}
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>Price: {Price} </p>
                                    <p>Quantity: {Quantity} </p>
                                    <p>{Description}</p>

                                    <div className="flex  items-center gap-4">
                                        <div class="card-actions justify-start">
                                            <div class="btn btn-secondary  font-bold  btn-sm ">Order</div>
                                        </div>
                                        <div class="card-actions justify-end">
                                            <div class="badge badge-outline">Ratings </div>
                                            <div class="h-1 w-5"><img src={rating} alt="" /></div>
                                            <div class="h-1 w-5"><img src={rating} alt="" /></div>
                                            <div class="h-1 w-5"><img src={rating} alt="" /></div>
                                            <div class="h-1 w-5"><img src={rating} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default AllTools;