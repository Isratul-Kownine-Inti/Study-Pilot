import React from 'react';
import { FaStar } from 'react-icons/fa';


const reviews = [
    {
        id: 1,
        name: "Sarah Ahmed",
        rating: 5,
        comment:
            "StudyFlow helped me organize my daily study routine and stay consistent with my goals. I feel much more productive now!",
        designation: "University Student",
    },
    {
        id: 2,
        name: "Mahmud Hasan",
        rating: 5,
        comment:
            "I love how simple it is to plan tasks and track progress. It makes managing multiple subjects so much easier.",
        designation: "CSE Student",
    },
    {
        id: 3,
        name: "Nusrat Jahan",
        rating: 4,
        comment:
            "The daily study plan helps me focus on important tasks instead of wasting time deciding what to study next.",
        designation: "College Student",
    },
    {
        id: 4,
        name: "Tanvir Rahman",
        rating: 5,
        comment:
            "A great tool for building consistent study habits. The progress tracking keeps students motivated and organized.",
        designation: "Lecturer",
    },
    {
        id: 5,
        name: "Farhana Islam",
        rating: 5,
        comment:
            "I recommend StudyFlow to students who struggle with time management. It encourages better planning and independent learning.",
        designation: "School Teacher",
    },
    {
        id: 6,
        name: "Arif Hossain",
        rating: 4,
        comment:
            "The focus timer and task planner help me avoid distractions and make better use of my study time.",
        designation: "University Student",
    },
];

const Review = () => {
    return (
        <div className='container mx-auto mt-10 text-center space-y-4 '>
            <h2 className='font-bold text-2xl text-black'>Students are getting more done</h2>
            <div className='flex flex-col md:flex-row gap-4 md:gap-7 justify-center items-center flex-wrap '>
                {
                    reviews.map((review) => {
                        return (
                        <div key={review.id} className="card card-border bg-base-100 w-80 md:w-96 text-start shadow-sm">
                            <div className="card-body">
                                <p className='text-amber-600 font-semibold'>{"★".repeat(review.rating)}
</p>
                                <p className='text-black font-semibold'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <p className='text-black font-bold mt-5'>{review. name}</p>
                                <p className='text-slate-600 text-sm font-semibold'>{review.designation}</p>
                            </div>
                        </div>
                    )})
                }
            </div>
        </div>
    );
};

export default Review;