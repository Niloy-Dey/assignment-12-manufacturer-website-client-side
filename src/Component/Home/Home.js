import React from 'react';
import Banner from './Banner';
import HomeTools from './HomeTools';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const Home = () => {

    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tools`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])

    const filteredTools = tools?.slice(0, 6)

    /* navigating all tools page  */
    const navigate = useNavigate();

    const seeAllProduct= () =>{
        navigate('/allTools');
    }
    return (
        <div className='mt-8  pb-20   bg-slate-100	'>
            <Banner></Banner>

            <h1 className='text-4xl  font-bold  text-orange-400 text-center '>Our Tools</h1>
            <div class="flex flex-col w-full border-opacity-50">
                <div class="divider mx-60 "></div>
            </div>

            <div className=' px-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    filteredTools?.map(tool => <HomeTools key={tool._id} tool={tool}></HomeTools>)
                }
            </div>
            <div className='text-center py-10 '>
                <button className='btn ' onClick={seeAllProduct}>See All Product</button>
            </div>

        </div>
    );
};

export default Home;