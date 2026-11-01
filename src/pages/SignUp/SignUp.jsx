
import React from 'react';
import { LuNotebookPen } from 'react-icons/lu';
import { Link } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        // if (password !== confirmPassword) {
        //      toast.error("Password doesn't match!");
        //     return;
        // }
        // else{
        //     toast.success("Your account is successfully created!")
        // }

        try{
            const response = await fetch("https://studyflow-backend-rho.vercel.app/api/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name,email,password}),
            })
            const data = await response.json()
            console.log(data,"data")
            toast.success(data.message||"Your account is successfully created!")
        }
        catch(error)
        {
            toast.error("something went wrong! ")
        }



        console.log(email)
        console.log(password)
    }
    return (
        <div className="min-h-screen flex items-center justify-center mt-5 p-5">

              

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="hidden md:flex flex-col justify-around bg-emerald-700 text-white p-12">
                    <div>
                        <h2 className="text-3xl font-bold flex gap-2"><LuNotebookPen /> StudyPilot</h2>
                        <p className="text-indigo-200 mt-2">Your goals. Your progress. Your success.</p>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold leading-tight">
                            Start Your Journey!
                            <br />
                            Make Every Day Count.
                        </h1>
                        <p className="text-indigo-100 mt-5 leading-relaxed">
                            Create your account and build better study habits.
                            Stay focused, organize your tasks, and achieve your goals
                            one day at a time.                        </p>
                    </div>


                </div>

                {/* Right Side - Login Form */}
                <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-800">
                            Sign Up
                        </h1>
                        <p className="text-slate-500 mt-2">
                            Join StudyPilot and start organizing your studies.

                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleFormSubmit}>
                        
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Your name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 text-black border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>

                     
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

                
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Password
                                </label>

                            </div>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 text-black border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                minLength={6}
                                className="w-full px-4 py-3 border border-slate-200 text-black rounded-xl outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition"
                            />
                        </div>
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                required
                                className="accent-emerald-700 w-4 h-4 mt-1"
                            />
                            

                            <label htmlFor="terms" className="text-sm text-slate-600">
                                I agree to the Terms & Conditions and Privacy Policy.
                            </label>
                        </div>




                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-100 cursor-pointer"
                        >
                            Sign Up
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
                        Already have an account?
                        <Link to="/log-in" className="text-emerald-700 font-semibold ml-1 hover:underline">
                            Sign In
                        </Link>
                    </p>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
