import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
    return (
        <div className='flex justify-center my-32'>
            <div className="max-w-xs rounded-md shadow-md bg-green-500 text-gray-100">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Thank You</h2>
                        <p className="text-gray-100">Your Information save successfully.</p>
                    </div>
                    <Link to='/'>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-400 text-gray-900">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Confirm;