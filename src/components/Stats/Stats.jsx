import React from 'react';

const Stats = () => {
    return (
        <div className='bg-base-200 mt-10 p-3'>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 space-y-4'>
            <div className='text-center'>
                <p className='text-emerald-700 font-semibold text-2xl'>1240+</p>
                <span className='text-slate-400 font-medium text-sm'>Students using StudyPilot</span>
            </div>
             <div className='text-center'>
                <p className='text-emerald-700 font-semibold text-2xl'>1.2M</p>
                <span className='text-slate-400 font-medium text-sm'>Tasks completed</span>
            </div>
             <div className='text-center'>
                <p className='text-emerald-700 font-semibold text-2xl'>89%</p>
                <span className='text-slate-400 font-medium text-sm'>Report better focus</span>
            </div>
             <div className='text-center'>
                <p className='text-emerald-700 font-semibold text-2xl'>4.8/5</p>
                <span className='text-slate-400 font-medium text-sm'>Average Rating</span>
            </div>
            </div>
        </div>
    );
};

export default Stats;
