import React from 'react';
import FeaturedCard from '../Shared/FeaturedCard';
import { LuBookOpen, LuCalendarCheck, LuChartNoAxesCombined, LuListChecks, LuTarget, LuTimer } from 'react-icons/lu';
const features = [
  {
    title: "Smart Task Planning",
    description:
      "Break big study goals into small, manageable tasks you can complete one step at a time.",
    icon: <LuListChecks />,
  },
  {
    title: "Goal Progress Tracking",
    description:
      "See how far you've come, what remains, and how close you are to reaching your goals.",
    icon: <LuTarget />,
  },
  {
    title: "Subject Organization",
    description:
      "Keep your subjects organized and understand where your study time and attention go.",
    icon:<LuBookOpen />,
  },
  {
    title: "Focus Timer",
    description:
      "Use focused study sessions and short breaks to build better habits and avoid burnout.",
    icon: <LuTimer />,
  },
  {
    title: "Visual Progress Insights",
    description:
      "Turn your completed tasks and study activity into clear progress indicators that keep you motivated.",
    icon: <LuChartNoAxesCombined />,
  },
  {
    title: "Daily Study Schedule",
    description:
      "Create a realistic daily plan that helps you prioritize important tasks and make the most of your time.",
    icon: <LuCalendarCheck />,
  },
];


const FeaturedSection = () => {
    return (
        <div className='container mx-auto space-y-4 mt-10 text-center'>
              <h2 className='font-bold text-2xl text-black'>Study smarter, not harder.</h2>
              <p className='text-slate-600 px-2 md:px-1'>Turn overwhelming goals into manageable tasks, build consistent study habits,<br></br> and see your progress every step of the way.</p>

              <div className='p-3 md:p-1 flex flex-col md:flex-row md:flex-wrap gap-4  md:gap-7 justify-center items-center text-start' >
                {
                    features.map((feature,index)=>{
                        return (
                        <FeaturedCard 
                        key={index}
                        icon={feature.icon}
                         title={feature.title}
                         description={feature.description}
                        
                        ></FeaturedCard>
                    )
                    })
                }
              </div>
        </div>

    );
};

export default FeaturedSection;