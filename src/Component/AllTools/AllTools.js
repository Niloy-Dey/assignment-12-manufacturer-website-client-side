import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rating from '../../assets/rating.ico'
import Purchase from '../Purchase/Purchase';
const AllTools = () => {


    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    const navigate = useNavigate();
    const handleOrder=(id) =>{
        // navigate('/purchase', {state:tool})
        // console.log(tool);
    
    }
    return (

        <div className='bg-slate-100 py-24  px-10 '>

            <h1 className='text-4xl  font-bold  text-orange-400 text-center '>Our Tools</h1>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider mx-60 "></div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    tools.map(tool => {
                        const { _id,  Image, Name, Price, Description, Quantity } = tool;

                        return (
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="h-40 w-full" src={Image} alt="" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">
                                        {Name}
                                        {/* <div class="badge badge-secondary">NEW</div> */}
                                    </h2>
                                    <p>Price: {Price} </p>
                                    <p>Available Quantity: {Quantity} </p>
                                    <p>{Description}</p>

                                    <div className="flex  items-center gap-4">
                                        <div class="card-actions justify-start">
                                            <button onClick={() => handleOrder(_id) } class="btn btn-secondary  font-bold  btn-sm ">Order</button>
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