
import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const Login =  () => {
    const {user,setUser}= useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        


        try {
            const response = await fetch("https://studyflow-backend-rho.vercel.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            })
            const data = await response.json()
            console.log(data, "data")
            if (data.success) {
                toast.success(data.message || "You logged in successfully")
                setUser(data.data.user)
                navigate(from)
            }
            else {
                throw new Error(data.message || "Failed to sign in")
            }
        }
        catch (error) {
            toast.error(error.message || "An error occurred, please try again!")

        }

    }
    console.log(user)
    return (
        <div className="min-h-screen flex items-center justify-center mt-5  p-5">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Side - Welcome Section */}
                <div className="hidden md:flex flex-col justify-between bg-emerald-700 text-white p-12">
                    <div>
                        <h2 className="text-3xl font-bold flex gap-2"><LuNotebookPen /> StudyPilot</h2>
                        <p className="text-indigo-200 mt-2">Your goals. Your progress. Your success.</p>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Welcome Back!
                            <br />
                            Keep Your Focus.
                        </h1>
                        <p className="text-indigo-100 mt-5 leading-relaxed">
                            Stay organized, track your progress, and turn your study goals into daily achievements.
                        </p>
                    </div>


                </div>

                {/* Right Side - Login Form */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-800">
                            Sign In
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleFormSubmit}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 text-black border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Password
                                </label>
                                <Link to="/forgot-password" className="text-sm text-emerald-700 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 text-black border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="remember" className="accent-emerald-700 w-4 h-4" />
                            <label htmlFor="remember" className="text-sm text-slate-600">
                                Remember me
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-100 cursor-pointer"
                        >
                            Sign In
                        </button>

                    </form>

                    <div className="flex items-center gap-4 my-7">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-sm text-slate-400">OR</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    {/* Google Login */}
                    <button className="w-full border border-slate-200 hover:bg-slate-50 py-3 rounded-xl flex items-center justify-center gap-3 text-slate-700 font-medium transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-sm text-slate-500 mt-8">
                        Don't have an account?
                        <Link to="/sign-up" className="text-emerald-700 font-semibold ml-1 hover:underline">
                            Sign Up
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;
