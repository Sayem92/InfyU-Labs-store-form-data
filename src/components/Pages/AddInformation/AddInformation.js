import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const AddInformation = () => {
    const { register, formState: { errors }, handleSubmit, resetField } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_IMGBB_key;
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);


    const handleAddInformation = data => {
        if (data.image.length === 0) {
            return alert('Please upload a new image');
        }
        else {
            setLoading(true);
            const image = data.image[0]
            const formData = new FormData();
            formData.append('image', image)
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {

                        const addInformation = {
                            name: data.name,
                            image: imgData.data.display_url,
                            father: data.father,
                            mother: data.mother,
                            college: data.college,
                            class: data.class,
                            roll: data.roll,
                            email: user?.email
                        }

                        console.log(addInformation)


                        fetch('http://localhost:5000/addInformation', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(addInformation)
                        })
                            .then(res => res.json())
                            .then(result => {
                                // console.log(result);
                                toast.success(`${data.name} Information save successful`);
                                setLoading(false)
                                navigate('/');

                            })

                    }
                })


        }
    };

    const handleClick = () => {
        resetField("name");
        resetField("image");
        resetField("father");
        resetField("mother");
        resetField("className");
        resetField("roll");
        resetField("college");
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 py-16 mx-auto">
                <form onSubmit={handleSubmit(handleAddInformation)}
                    className="w-full max-w-md">
                    <h1 className="text-3xl text-center font-semibold text-gray-800 capitalize  dark:text-white">Add Information</h1>


                    <div className="relative flex items-center mt-4">
                        <input type="text"
                            {...register("name", {
                                required: 'name is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Name" />
                    </div>
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}


                    <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-4 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <h2 className="mx-3 text-gray-400">Upload Image</h2>
                        <input id="dropzone-file" type="file"
                            {...register('image', {
                                required: "Please upload image"
                            })}
                            className="hidden" />
                    </label>
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}





                    <div className="relative flex items-center mt-4">
                        <input type="text"
                            {...register("mother", {
                                required: 'mother name is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Father Name" />
                    </div>
                    {errors.mother && <p className='text-red-600'>{errors.mother?.message}</p>}



                    <div className="relative flex items-center mt-4">
                        <input type="text"
                            {...register("father", {
                                required: 'father name is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mother Name" />
                    </div>
                    {errors.father && <p className='text-red-600'>{errors.father?.message}</p>}


                    <div className="relative flex items-center mt-4">
                        <input type="text"
                            {...register("college", {
                                required: 'college name is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="College Name" />
                    </div>
                    {errors.college && <p className='text-red-600'>{errors.college?.message}</p>}



                    <div className="relative flex items-center mt-4">
                        <input type="text"
                            {...register("class", {
                                required: ' class is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter your class" />
                    </div>
                    {errors.className && <p className='text-red-600'>{errors.className?.message}</p>}


                    <div className="relative flex items-center mt-4">
                        <input type="number"
                            {...register("roll", {
                                required: 'roll number is required'
                            })}
                            className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Roll Number" />
                    </div>
                    {errors.roll && <p className='text-red-600'>{errors.roll?.message}</p>}



                    <div className="mt-8 flex justify-between ">
                        <div>
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Submit
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={handleClick}

                                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-sky-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                clear form
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddInformation;