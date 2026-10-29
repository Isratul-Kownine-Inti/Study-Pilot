import React from 'react';

const FAQ = () => {
    return (
        <div className='container mx-auto mt-10 space-y-4 '>
            <h2 className='text-black font-bold text-2xl text-center'>Frequently Asked Questions</h2>
            <div className='rounded w-[80%] mx-auto'>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-black">Is StudyPilot free to use?</div>
                    <div className="collapse-content text-sm  text-slate-700">Yes! StudyPilot offers a free plan with essential study planning tools. You can upgrade to a paid plan for additional features.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold  text-black">How does StudyPilot help me plan my day?</div>
                    <div className="collapse-content text-sm  text-slate-700">StudyPilot helps you organize your tasks into a daily study plan so you know what to study and which tasks to prioritize.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold  text-black ">Can I track my study progress?</div>
                    <div className="collapse-content text-sm  text-slate-700">Absolutely! You can track completed tasks, monitor your goals, and see how much progress you've made over time.</div>
                </div>
                 <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold  text-black">Can I cancel my subscription anytime?</div>
                    <div className="collapse-content text-sm  text-slate-700">Yes, paid subscriptions can be canceled anytime. You'll retain access to paid features until the end of your current billing period, subject to your subscription terms.</div>
                </div>
                 <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold  text-black ">Who can use StudyPilot?</div>
                    <div className="collapse-content text-sm text-slate-700">StudyPilot is designed for school students, college students, university students, and anyone who wants to organize their learning more effectively.</div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;