import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';

const Banner = () => {
    return (
        <div className='mt-5 container mx-auto text-center space-y-4 '>
            <span className="badge font-semibold ">Plan Your Day. Master Your Goals.</span>
            <h1 className='font-bold text-3xl text-black'>Turn your plans into progress,<br></br> one day at a time!</h1>
            <p className='text-slate-500 font-medium  md:ml-60 w-full md:w-[60%]'>Turn your daily priorities into achievable tasks, protect your focus, and track how far you've come. Your goals feel closer when your days have a plan.</p>
            <div className='flex flex-col md:flex-row justify-center gap-3 px-2'>
                <button className='btn bg-emerald-700 text-white rounded-2xl'>Start for free <FaArrowRight className='text-white' /></button>
                <button className='btn  text-black rounded-2xl '>See how it works</button>

             
            </div>
            <div className='flex justify-center items-center mt-4 px-3'>
                <div className="card w-[450px] bg-base-100 shadow-sm text-slate-500 rounded-2xl">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold">Today's progress</h2>
                                <span className="font-medium text-slate-500">72% complete</span>
                            </div>
                            <progress className="progress w-56 bg-emerald-600" value={0} max="100" ></progress>
                            <ul className="mt-6 flex flex-col gap-2 font-medium  text-start">
                                <li className='flex justify-start border border-gray-400 rounded p-1 shadow-sm'>
                                    <IoCheckmarkDoneCircle  className='text-emerald-600 p-1 text-2xl' />
                                  <span>Solve 10 integration problems</span>
                                </li>
                                <li className='flex justify-start border border-gray-400 rounded p-1 shadow-sm'>
                                    <IoCheckmarkDoneCircle className='text-emerald-600 p-1 text-2xl' />
                                 <span>Learn Js and practice</span>
                                </li>
                                <li className='flex justify-start border border-gray-400 rounded p-1 shadow-sm'>
                                   <IoCheckmarkDoneCircle className='text-emerald-600 p-1 text-2xl' />
                                    <span>English Grammar practice</span>
                                </li>
                                <li className='line-through flex justify-start border border-gray-400 rounded p-1 shadow-sm'>
                                     <TiDelete className='text-red-700 p-1 text-2xl' />
                                    <span>AI-driven image enhancements</span>
                                </li>
                                
                             
                            </ul>
                            
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default Banner;
