
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
            <div className="text-center max-w-lg">

                {/* 404 Illustration */}
                <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest">
                    404
                </h1>

                <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute text-white">
                    Oops!
                </div>

                {/* Message */}
                <h2 className="text-3xl font-bold text-slate-800 mt-8">
                    Page Not Found
                </h2>

                <p className="text-slate-500 mt-4 leading-relaxed">
                    Sorry, we couldn't find the page you're looking for.
                    The page might have been removed, renamed, or is temporarily unavailable.
                </p>

                {/* Back Home Button */}
                <Link
                    to="/"
                    className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-200"
                >
                    Back to Home
                </Link>

                

            </div>
        </div>
    );
};

export default ErrorPage;
