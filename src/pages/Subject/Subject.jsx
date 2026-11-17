
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Subject = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [color, setColor] = useState('#fffff');
    const [subjects, setSubjects] = useState([]);
    const resetForm = () => {

        setName('')
        setColor('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submitted");
        try {
            const formData = {
                name,
                color
            };
            const res = await fetch('https://studyflow-backend-rho.vercel.app/api/subjects', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            console.log(data)
            toast.success(data.message)

            if (res.ok) {
                setIsModalOpen(false);
            }
        }
        catch (error) {
            toast.error("Something went wrong!")
        }
        // finally{
        resetForm()
        // }


    }

    const fetchSubjects = async () => {
        const res = await fetch('https://studyflow-backend-rho.vercel.app/api/subjects', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        const data = await res.json()
        setSubjects(data.data)
    }

    useEffect(() => {
        fetchSubjects();
    }, [])

    console.log(subjects)
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-bold'>Subject</h2>
                    <p className='font-semibold text-slate-600'>
                        Track every subject you're studying along with your completion progress.
                    </p>
                </div>
               
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='btn bg-emerald-700 text-white'
                >
                    <FaPlus /> Add Subject
                </button>
            </div>

             <div className='grid grid-cols-3 gap-4 mt-10'>
                    {
                        subjects.map(subject => <div >
                            <div className="card w-96 bg-base-100 card-xs shadow-sm">
                                <div className="card-body">
                                    <div className='flex items-center gap-2'>
                                        <div className="badge badge badge-xs"></div>
                                    <h2 className="card-title">{subject.name}</h2>
                                    </div>
                                    <progress className="progress progress-error w-56" value="70" max="100"></progress>
                                    <div className="justify-end card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>




            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
                    <div className='bg-white w-full max-w-md rounded-2xl p-6 shadow-xl'>

                        <div className='flex items-center justify-between mb-6'>
                            <h3 className='text-xl font-bold'>Add New Subject</h3>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className='text-2xl text-gray-500 hover:text-red-500'
                            >
                                <IoClose />
                            </button>
                        </div>

                        <form className='space-y-5' onSubmit={handleSubmit}>
                            {/* Subject Name */}
                            <div>
                                <label className='block font-medium mb-2'>
                                    Subject Name
                                </label>
                                <input
                                    type='text'
                                    value={name}
                                    placeholder='e.g. Mathematics'
                                    className='input input-bordered w-full'
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            {/* Subject Color */}
                            <div>
                                <label className='block font-medium mb-2'>
                                    Choose Color
                                </label>
                                <input
                                    type='color'
                                    value={color}
                                    defaultValue='white'
                                    className='w-full h-12 rounded-lg cursor-pointer'
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>

                            <div className='flex justify-end gap-3 pt-3'>
                                <button
                                    type='button'
                                    onClick={() => setIsModalOpen(false)}
                                    className='btn btn-ghost'
                                >
                                    Cancel
                                </button>

                                <button

                                    type='submit'
                                    className='btn bg-emerald-700 text-white'
                                >
                                    Add Subject
                                </button>

                            </div>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Subject;
