import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers ] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
} , [])

const handleDeleteUser = () =>{

}
    return (
        <div className='mt-22'>
            <h1 className='text-center text-2xl font-bold text-orange-400'>My Orders</h1>
            <div class=" mt-5 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                      
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                     
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                               
                                    <tr>
                                        <td>{index+1} </td>
                                        <td>{user.email}</td>
                                        <td><button  className='bg-green-400 text-white p-2 rounded-2xl'>Make Admin</button></td>
                                        <td><button onClick={() => handleDeleteUser(user._id)} className='bg-red-400 text-white p-2 rounded-2xl'>Delete User</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;