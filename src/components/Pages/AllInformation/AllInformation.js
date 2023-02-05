import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';



const AllInformation = () => {
    const { user } = useContext(AuthContext);
    const { data: allInformation = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/AllInformation/${user?.email}`)
            const data = await res.json()
            return data;
        }
    });



    const handleDeleting = _id => {
        const agreed = window.confirm('Are you sure you want to delete')
        if (agreed) {

            fetch(`http://localhost:5000/allInformation/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`Information deleted successfully`)
                        refetch();
                    }

                })
        }
    };



    if (isLoading) {
        return <Loading></Loading>
    }

    if (!allInformation.length) {
        return <div className='dark:bg-gray-900 p-5 py-40 md:pb-44 flex justify-center'>
            <h1 className='text-3xl text-yellow-500'>No Information Added!.
                <span className='text-blue-500 underline'
                ><Link to='/addInformation'> Please add Information</Link></span>
            </h1>
        </div>
    };

    return (
        <div className=" md:py-20 p-2 md:px-10 sm:p-4 dark:bg-black text-white">
            <h2 className="mb-8 text-2xl text-center font-semibold leading-tight text-black dark:text-white">All Information</h2>
            <div className="overflow-x-auto">
                <table className="w-full p-6 text-sm text-left ">
                    <colgroup>
                        <col className="w-5" />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-5" />
                    </colgroup>
                    <thead>
                        <tr className="dark:bg-gray-700 bg-gray-600 border dark:border-gray-700">
                            <th className="p-3"></th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Father's</th>
                            <th className="p-3">Mother's</th>
                            <th className="p-3">College</th>
                            <th className="p-3">Class</th>
                            <th className="p-3">Roll</th>
                            <th className="p-3">Edit</th>
                            <th className="p-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody className=" dark:bg-gray-900 ">
                        {
                            allInformation?.map((information, i) => <tr key={information._id} className='border dark:border-gray-700'>
                                <td className="px-3 text-2xl font-medium dark:text-white text-black">{i + 1}</td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.name}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <div className="avatar">
                                        <div className="w-24 rounded-lg">
                                            <img src={information.image} className='w-24 h-20' alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.father}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.mother}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.college}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.class}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p className='dark:text-white text-black'>{information.roll}</p>
                                </td>
                                
                                <td className="px-3 py-2">
                                    <Link to={`/updateInformation/${information._id}`} >
                                        <button className='px-2 py-3 rounded bg-sky-500 text-white'>Update</button>
                                    </Link>
                                </td>
                                <td className="px-3 py-2">
                                    <button onClick={() => handleDeleting(information._id)}
                                        className='px-2 py-3 rounded bg-red-500 text-white'>Delate</button>
                                </td>
                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllInformation;