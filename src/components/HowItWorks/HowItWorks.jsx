import React from 'react';


const steps= [
  {
    step: "01",
    title: "Add your study goals",
    description:
      "Choose what you want to achieve, set a deadline, and give your learning a clear direction.",
  },
  {
    step: "02",
    title: "Plan your next steps",
    description:
      "Turn your goals into achievable daily tasks so you always know what to study next.",
  },
  {
    step: "03",
    title: "Build momentum daily",
    description:
      "Complete tasks, track your progress, and celebrate every small win along the way.",
  },
];

const HowItWorks = () => {
    return (
        <div className=' text-center mt-10 space-y-4 container mx-auto'>
            <h2 className='font-bold text-2xl text-black'>How It Works</h2>
             <div className=' px-3 md:px-1 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7' >
                {
                    steps.map((step,index)=>{
                        return (
                            <div key={index} className='bg-white text-black text-center rounded-xl w-auto md:w-96 p-5 shadow-sm'>
                                <span className='text-2xl font-semibold'>{step.step}</span>
                                <h2 className='font-semibold text-xl mb-1'>{step.title}</h2>
                                <p className='text-sm text-slate-600 font-medium'>{step.description}</p>
                            </div>

                        )
                    })
                }
             </div>
        </div>
    );
};

export default HowItWorks;