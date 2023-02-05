import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    let activeStyle = {
        textDecoration: "underline",
      };
    

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .then(err => console.log(err))
    }


    return (
        <div className="px-4 md:px-20 py-8 dark:bg-gray-800 bg-sky-600 text-white">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Store Information"
                    title="Store Information"
                    className="inline-flex items-center"
                >

                    <span className="ml-2 text-xl font-bold tracking-wide hover:text-black dark:text-green-500 uppercase">
                        Store Information
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                         style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                       }
                            to="/addTask"
                            aria-label="Add Information"
                            title="Add Information"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Add Information
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         style={({ isActive }) =>
                         isActive ? activeStyle : undefined
                       }
                            to="/allInformation"
                            aria-label="All Information"
                            title="All Information"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            All Information
                        </NavLink>
                    </li>
                    
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">

                    <li>
                        {
                            user?.uid ?
                            <button onClick={handleLogout}
                                className='btn px-2 py-3 font-medium bg-gray-400 hover:bg-gray-500 border-none text-white rounded-xl'>Log out</button>
                                :
                                <Link to='/login'>
                                <button className='btn px-2 py-3 font-medium bg-gray-400 hover:bg-gray-500 border-none text-white rounded-xl'>Login</button>
                                </Link>
                        }
                    </li>
                </ul>


                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="#FFFFFF"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="#FFFFFF"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="#FFFFFF"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="z-10 absolute top-0 left-0 w-full">
                            <div className="p-5 bg-gray-900 border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Store Information"
                                            title="Store Information"
                                            className="inline-flex items-center"
                                        >

                                            <span className="ml-2 text-xl font-bold tracking-wide text-green-500 uppercase">
                                                Store Information
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="#ffffff"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                            style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                          }
                                                to="/addInformation"
                                                aria-label="Add Information"
                                                title="Add Information"
                                                className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Add Information
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                            style={({ isActive }) =>
                                            isActive ? activeStyle : undefined
                                          }
                                                to="/allInformation"
                                                aria-label="All Information"
                                                title="All Information"
                                                className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                All Information
                                            </NavLink>
                                        </li>
                                        <li>
                                            {
                                                user?.uid ?
                                                <button onClick={handleLogout}
                                                    className='btn px-3 py-3 font-medium bg-gray-400 hover:bg-gray-500 border-none text-black rounded'>Log out</button>
                                                    :
                                                <Link to='/login'>
                                                <button
                                                    className='btn px-3 py-3 font-medium bg-gray-400 hover:bg-gray-500 border-none text-black rounded'>Login</button>
                                                </Link>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};



export default Navbar;