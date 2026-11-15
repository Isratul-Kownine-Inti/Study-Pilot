import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const NavBar = () => {
    const { user, setUser, loading } = useAuth();
    

    const handleLogOut = async () => {
        try {
            const response = await fetch("https://studyflow-backend-rho.vercel.app/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",

            });
            const data = await response.json()
            console.log(data, "data")
            if (data.success) {
                toast.success(data.message || "You logged out successfully")
                setUser(null)
            }
            else {
                throw new Error(data.message || "Failed to logout")
            }
        }
        catch (error) {
            toast.error(error.message || "An error occurred, please try again!")

        };
    }

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
                            <li><Link to="/features">Features</Link></li>

                            <li><a>How it works</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>FAQ</a></li>
                            <li><Link to="/private">

                                <div className="aura">
                                    <button className="btn">Private Page</button>
                                </div>

                            </Link>

                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost md:text-xl font-semibold"><LuNotebookPen className='bg-emerald-600 rounded text-white px-1 font-bold text-xl' />StudyPilot</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 font-medium text-slate-600">
                        <li><Link to="/features">Features</Link></li>
                        <li><a>How it works</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>FAQ</a></li>
                            <li><Link to="/private">

                                <div className="aura">
                                    <button className="text-slate-600">Private Page</button>
                                </div>

                            </Link>

                            </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {loading ? <span className="loading loading-spinner text-success"></span>
                        :
                        user?.name ? (
                            <div>

                                <button className=" bg-none" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                                    <div className="avatar w-10 mr-2">
                                        <div className="ring-emerald-700 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                            <img className='rounded-full' alt="Tailwind-CSS-Avatar-component" src="https://img.magnific.com/premium-vector/smiling-woman-avatar_937492-6135.jpg?semt=ais_hybrid&w=740&q=80" /> </div>

                                    </div>
                                    <span className='text-emerald-700 font-medium text-sm mr-5'>Welcome! {user.name}</span>
                                </button>

                                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                                    <li>
                                        <Link className='text-slate-600 font-medium mx-auto' to={`/dashboard`}>Dashboard</Link>
                                    </li>
                                    <li><button className='text-emerald-700 font-medium mx-auto' onClick={handleLogOut}>Logout</button></li>
                                </ul>







                            </div>


                        ) :
                            <Link to='/log-in'>
                                <button className='btn font-bold mr-5 text-black hover:bg-emerald-700 hover:text-white'>Log in</button>
                            </Link>
                    }

                    <button className='btn bg-emerald-700 text-white rounded-xl'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
