import React from 'react';

const Pricing = () => {
    return (
        <div className='text-center mx-auto container space-y-4 mt-10'>
            <h1 className='text-black font-bold text-2xl'>Simple Plans, Better Studying</h1>
            <p className='text-slate-600 font-semibold'>Start Free, Grow at Your Pace</p>
            <div className='flex flex-col md:flex-row justify-center  items-center gap-4 md:gap-7'>
                <div className="card w-90 md:w-96 bg-base-100 shadow-sm text-start">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-black">Free</h2>
                        <span className=" text-slate-700 font-semibold">Everything you need to get organized</span>
                        <span className="text-xl text-black font-bold">$0/<span className='text-slate-700'>forever</span></span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs text-slate-700">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited tasks and goals</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>5 Subjects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Focus Timer</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>7-Day history</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Progress Tracking</span>
                            </li>
                          
                          
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block text-black rounded-xl">Get Started</button>
                        </div>
                    </div>
                </div>

                  <div className="card w-90 md:w-96 bg-base-100 shadow-sm text-start">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-black">Pro</h2>
                        <span className=" text-slate-700 font-semibold">For students who want the full picture</span>
                        <span className="text-xl text-black font-bold">$6/<span className='text-slate-700'>per month</span></span>

                        <ul className="mt-6 flex flex-col gap-2 text-xs text-slate-700">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in free</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited Subjects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI dat planning</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Full history and Insights</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority Support</span>
                            </li>
                          
                          
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-emerald-700 btn-block text-white rounded-xl">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;