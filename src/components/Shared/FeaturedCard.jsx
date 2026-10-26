import React from 'react';

const FeaturedCard = ({icon, title, description}) => {
     
    return (
        <div className="card w-full md:w-96 bg-base-100 card-sm shadow-sm p-5 rounded-xl">
            <div>
                <span  className='text-emerald-700 font-bold text-xl' >{icon}</span>
                <h2 className=" text-black font-medium mt-2">{title}</h2>
                <p className='text-slate-600 font-medium text-sm'>{description}</p>
               
            </div>
        </div>

    );
};

export default FeaturedCard;