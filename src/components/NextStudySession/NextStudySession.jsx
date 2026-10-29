import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const NextStudySession = () => {
    return (
        <div className='container mx-auto mt-10 text-center space-y-4'>
            <div className="card w-[80%] mx-auto bg-base-100 card-xl shadow-sm">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-black text-center">Build a study routine that finally sticks.</h2>
                    <p className='text-slate-700 font-medium mt-3'>Stay organized,beat procrastination and your study time into meaningful progress</p>
                    <div >
                        <button className="btn bg-emerald-700 text-white mt-6">Start for free <FaArrowRight
                        /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextStudySession;