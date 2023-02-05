import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className='dark:bg-black'>
            <div className="bg-violet-400 dark:bg-black">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-200">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-200">Fill up the field with your information so that who are you is identified</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-200">Information is stimuli that has meaning in some context for its receiver.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/addInformation'>
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-green-500 text-gray-50">Add Information</button>
                        </Link>
                    </div>
                </div>
            </div>
            <img src="https://i.ibb.co/k5TGTcX/getty-941893182-388611.jpg" alt="to-do list" className="w-5/6 mx-auto pb-12 -mt-20  rounded-xl lg:-mt-40 dark:bg-black bg-white" />
        </section>
        </div>
    );
};

export default Home;