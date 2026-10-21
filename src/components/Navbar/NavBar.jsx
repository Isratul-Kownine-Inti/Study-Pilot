import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';

const NavBar = () => {
    return (
        <div className='bg-base-200'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium  text-slate-600">
                            <li><a >Features</a></li>
                            <li><a>How it works</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-xl font-semibold"><LuNotebookPen className='bg-emerald-600 rounded text-white px-1 font-bold text-xl' />StudyPilot</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 font-medium text-slate-600">
                        <li><a>Features</a></li>
                        <li><a>How it works</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='font-bold mr-5 text-black'>Log in</button>
                    <button className='btn bg-emerald-700 text-white rounded-xl'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
