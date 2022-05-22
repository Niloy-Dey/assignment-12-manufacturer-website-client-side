import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders';

const MyOrder = () => {

    const [orders, setOrders] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/orderDetails`)
        .then(res => res.json())
        .then(data => setOrders(data))
    })
    console.log(orders);

    return (
        <div className='mt-22'>
            {
                orders.map(order => <AllOrders key={order._id} order={order}></AllOrders>)
            }  
        </div>
    );
};

export default MyOrder;