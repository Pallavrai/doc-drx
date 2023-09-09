"use client"
import React from 'react';
import Link from 'next/link';
import { Crete_Round } from 'next/font/google';


const headingfont = Crete_Round({
    subsets: ['latin'],
    weight: '400',
});

const page = () => {
    return (
        <div className="main flex items-center justify-center border-2 h-[calc(100vh-3rem)] overflow-hidden">
            <form
                action=""
                className="login-form dark:shadow-[grey] dark:border-[#ccc] w-[90%] md:w-[50%] lg:w-[25%] shadow-2xl rounded-[10px] overflow-hidden pb-4"
            >
                <div className={`${headingfont.className} h-12 pt-7 text-center`}>
                    <h1 className="text-3xl md:text-5xl lg:text-7xl">Sign Up</h1>
                </div>

                <div className="credentials flex flex-col mt-10 md:mt-20 w-[90%] mx-auto md:w-[60%] lg:w-[60%]">
                    <label htmlFor="username" className='font-bold'>Username</label>
                    <input
                        type="text"
                        className="border-2 mb-3 md:mb-5 rounded-[10px] px-2 border-[#ccc]"
                        placeholder="Create a user name"
                        required
                    />
                    <label htmlFor="username" className="font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        className="border-2 mb-3 md:mb-5 rounded-[10px] px-2 border-[#ccc]"
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password" className="font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        className="border-2 rounded-[10px] px-2 border-[#ccc]"
                        placeholder="Enter your password"
                        required
                    />
                    <input
                        type="password"
                        className="border-2 rounded-[10px] px-2 mt-4 border-[#ccc]"
                        placeholder="Confirm your password"
                        required
                    />

                    <div className="checkbox flex items-center py-2 px-2">
                        <input
                            type="checkbox"
                            className="accent-[#ccc] outline-none"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox" className="text-[10px]">
                            Remember me
                        </label>
                    </div>

                    <div className="slink mb-8 text-center font-bold text-[grey]">
                        <h5 className='text-[12px] '>Already have an account ?<span className='text-[blue]' ><Link href="/login" >
                            Login
                        </Link></span></h5>

                    </div>
                </div>

                <div className="submit flex items-center justify-center h-12 md:h-16">
                    <button className="submit-btn bg-black rounded-xl font-extrabold text-white px-4 md:px-5 py-2 md:py-2 dark:text-[#ccc]">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;
