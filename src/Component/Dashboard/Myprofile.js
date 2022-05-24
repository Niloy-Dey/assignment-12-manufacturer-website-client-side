import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='m-40'>

            <div>
                <h1 className='text-xl font-bold text-center'>My profile</h1>
                <h1 className='text-xl font-bold text-center pl-0 '>{user.email}</h1>
            </div>
        </div>
    );
};

export default Myprofile;