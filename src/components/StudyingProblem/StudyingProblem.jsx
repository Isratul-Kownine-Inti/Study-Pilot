import React from 'react';
import FeaturedCard from '../Shared/FeaturedCard';
import { GoGoal } from 'react-icons/go';
import { LuLayers, LuTrendingDown } from 'react-icons/lu';

const StudyingProblem = () => {
    return (
        <div className='container mx-auto text-center mt-10 space-y-4'>
            <h1 className='font-bold text-2xl text-black'>Your goals aren't too big <br></br> Your system is missing.</h1>
            <p className='text-slate-600 '>You are not lacking discipline. You're lacking a place where your goals <br /> turn into today's task.</p>
            <div className='flex flex-col md:flex-row md:justify-center gap-4 md:gap-7 text-start p-3 md:p-1'>
                <FeaturedCard icon={<GoGoal className='text-emerald-700 font-bold text-xl'/>} title={"No clear next step"} description={"“I need to study more” isn't a plan. Turn big ambitions into clear, manageable tasks you can actually start today."}></FeaturedCard>

                    <FeaturedCard icon={<LuTrendingDown  className='text-emerald-700 font-bold text-xl' />} title={"Progress feels invisible"} description={"“It's easy to lose momentum without seeing your progress. Build consistent habits and celebrate every small win along the way."}></FeaturedCard>

                        <FeaturedCard icon={ <LuLayers  className='text-emerald-700 font-bold text-xl' /> } title={"Everything feels scattered"} description={"“Notes in one app, deadlines in another, and tasks scattered everywhere. Bring your entire study routine together in one organized space."}></FeaturedCard>
            </div>
        </div>
    );
};

export default StudyingProblem;