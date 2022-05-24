import React from 'react';

import country from '../../assets/country.jpg'
import analysis from '../../assets/analisis.jpg'
import client from '../../assets/client.jpg'
import like from '../../assets/like.png'
const BusinessSummry = () => {
    return (
        <div className='mx-10'>
            <h1 className='text-center  my-10 text-3xl font-bold text-orange-400 '>Our Business Summary</h1>

            <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>

                <div class="card w-80 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={country} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">104</h2>
                        <p>countries</p>
                   </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={client} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">400+</h2>
                        <p>countries</p>
                   </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={analysis} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">1020 +</h2>
                        <p>projects</p>
                   </div>
                </div>
                <div class="card w-80 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={like} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">500+ </h2>
                        <p>Happy clients</p>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummry;