import React, { useEffect, useState } from 'react';

const AllOrders = ({ order, orders, setOrders }) => {


    // console.log(order);
    

    
    // const [orders, setOrders] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orderDetails`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    // const handleDeleteOrder= (id)=>{
    //     // console.log(id);
    //     const proceed = window.confirm('Are you sure delete this item ?');
    //     if(proceed){
    //         const url= `http://localhost:5000/orderDetails/${id}`;
    //             fetch(url , {
    //                 method: 'DELETE'
    //             })
    //             .then(res => res.json())
    //             .then(data =>{
    //                 console.log(data);
    //                 const remaining = orders.filter(order => order._id !== id);
    //                 setOrders(remaining);
    //             })

    //     }
        
    // }

    const { _id, Image, Name, Price, Description, Quantity } = order;
    return (
      
            <div>
                
                // <tr>
                //     <td>{Name}</td>
                //     <td>user name</td>
                //     <td>Pending</td>
                {/* //     <td><button onClick={() => handleDeleteOrder(order._id)} className='bg-red-400 text-white p-2 rounded-2xl'>Delete Order</button></td> */}
                // </tr>
            </div>
           
        
    );
};

export default AllOrders;