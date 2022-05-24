import React from 'react';
import niloy from '../../assets/Niloyd.jpg'
const MyPortFolio = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-24 '>
                <div class="card w-80 bg-base-100 h-[300px] my-5 shadow-xl">
                    <div className=''><figure><img src={niloy} className="w-full  " alt="Shoes" /></figure></div>
                </div>
            </div>
            <div className='flex justify-center items-center text-center' >
                <div>
                    <h2 class="card-title  ml-10  font-bold text-2xl ">Niloy Dey</h2>
                    <p class="card-title ml-7 font-bold text-xl ">Web Developer</p>
                    <p class="card-title   font-bold text-xl ">niloydey@gmail.com</p>
                </div>
            </div>
            <div className='my-20  mx-40 grid gap-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="my-3 card-title text-orange-400">Educational Qualification </h2>
                        <hr />
                        <h2 class="card-title">Higher secondary certificate</h2>
                        <p><b>BEPZA PUBLIC SCHOOL AND COLLEGE</b></p>
                        <hr />
                        <h2 class="card-title"> secondary school certificate</h2>
                        <p><b>COLLEGIEAT HIGH SCHOOL </b></p>
                        
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="my-3 card-title text-orange-400">Live Links  of My project </h2>
                        <hr />
                        <p>1. <b>https://fabulous-moxie-834cef.netlify.app/</b></p>
                        <hr />
                        <p>2. <b>https://matrimony-convention-hall.netlify.app/ </b></p>
                        <hr />
                        <p>3. <b> https://lighthearted-biscuit-5624a1.netlify.app/</b></p>
                        <hr />
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;