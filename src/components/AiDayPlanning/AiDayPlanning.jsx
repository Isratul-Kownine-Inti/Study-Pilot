import React from 'react';
import { BsStars } from 'react-icons/bs';

const AiDayPlanning = () => {
    return (
        <div className='container mx-auto mt-10 bg-black rounded-2xl w-80 md:w-[70%] py-10 px-5'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-2 justify-around items-center'>
                <div className='w-auto md:w-[40%] space-y-2'>
                    <div className='flex gap-1'>
                        <BsStars className='font-medium text-amber-600 mt-1' />
                        <span className='font-medium text-amber-600'>AI DAY PLANNING</span>
                    </div>
                    <p className='text-xl font-semibold '>Not sure what to study next? Let StudyPilot plan your day.</p>
                    <p className='text-semibold text-sm text-slate-400'>One click turns your unfinished tasks into a simple, realistic schedule — so you know what to study and when to start.</p>
                </div>
                <div className='w-auto md:w[30%] space-y-2 bg-olive-700 py-5 px-10 border-2 border-slate-600 rounded-2xl shadow-sm'>
                    <h3 className='font-semibold text-amber-600'>TODAY"S SUGGESTED PLAN</h3>

                    <div className='text-semibold text-sm text-white'>
                        <p>9:00–9:45 Deep focus session</p>
                        <p>10:00–10:45 Complete the next task</p>
                        <p>11:00–11:30 Review and recall</p>
                        <p>12:00–12:30 Take a Practice Quiz</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AiDayPlanning;