'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import Link from 'next/link'; // Import the Link component

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);  // for active item 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle clicking on a menu item
    const handleClick = (item) => {
        setActiveItem(item);
    }

    return (
        <>
            {/* Add sticky and top-0 to make navbar stick to the top */}
            <nav className="sticky top-0 z-50 bg-white px-7 py-4 flex justify-between items-center">
                <a className="text-3xl font-bold leading-none" href="#">
                    <Image src="/assets/icon/logo.png" alt="Favorite" width={66} height={66} />
                </a>

                {/* Compact Search Bar */}
                <div className="max-w-md mx-auto">
                    <div className="relative flex items-center p-2 w-full h-12 bg-white overflow-hidden rounded-3xl border border-grey">
                        <input
                            className="peer h-full w-full outline-none text-sm text-black pr-12 rounded-lg border-none"
                            type="text"
                            id="search"
                            placeholder="Search something.."
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:space-x-6">
                    <li>
                        <a
                            className={`text-sm text-black hover:underline hover:underline-offset-4 transition duration-300 ${activeItem === 'Home' ? 'underline underline-offset-4' : ''
                                }`}
                            href="#"
                            onClick={() => handleClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-sm text-black hover:underline hover:underline-offset-4 transition duration-300 ${activeItem === 'Shop' ? 'underline underline-offset-4' : ''
                                }`}
                            href="#"
                            onClick={() => handleClick('Shop')}
                        >
                            Shop
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-sm text-black hover:underline hover:underline-offset-4 transition duration-300 ${activeItem === 'New Arrivals' ? 'underline underline-offset-4' : ''
                                }`}
                            href="#"
                            onClick={() => handleClick('New Arrivals')}
                        >
                            New Arrivals
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-sm text-black hover:underline hover:underline-offset-4 transition duration-100 ${activeItem === 'Deals' ? 'underline underline-offset-4' : ''
                                }`}
                            href="#"
                            onClick={() => handleClick('Deals')}
                        >
                            Deals
                        </a>
                    </li>
                    <li>
                        <a
                            className={`text-sm text-black hover:underline hover:underline-offset-4 transition duration-300 ${activeItem === 'Contact' ? 'underline underline-offset-4' : ''
                                }`}
                            href="#"
                            onClick={() => handleClick('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                <div className=''>
                    <Image src="/assets/images/sign-in.png" alt="Favorite" width={15} height={15} />
                </div>

                {/* Sign In link */}
                {/* <Link href="/login"> */}
                    <Link href="/login" className="py-2 px-2 text-sm text-black font-bold rounded-xl transition duration-200">
                        Sign In
                    </Link>
                {/* </Link> */}
                
                {/* Icons */}
                <div className="hidden lg:flex lg:mx-auto lg:items-center lg:space-x-1">
                    <Image src="/assets/images/Fav.png" alt="Favorite" width={40} height={40} />
                    <Image src="/assets/images/Profile.png" alt="Profile" width={40} height={40} />
                    <Image src="/assets/images/wallet.png" alt="Wallet" width={40} height={40} />
                    <Image src="/assets/images/chat.png" alt="Chat" width={40} height={40} />
                    <Image src="/assets/images/cart.png" alt="Cart" width={40} height={40} />
                </div>
            </nav>

            {/* Mobile Menu with Transition */}
            <div className={`navbar-menu fixed inset-0 z-50 bg-gray-800 bg-opacity-25 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none text-black" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                                <path xmlns="http://www.w3.org/2000/svg" d="..." />
                            </svg>
                        </a>
                        <button onClick={toggleMenu} className="navbar-close">
                            <svg
                                className="h-6 w-6 text-black cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul>
                        <li><a className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded">Home</a></li>
                        <li><a className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded">Shop</a></li>
                        <li><a className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded">New Arrivals</a></li>
                        <li><a className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded">Deals</a></li>
                        <li><a className="block p-4 text-sm font-semibold text-black hover:bg-gray-50 hover:text-gray-600 rounded">Contact</a></li>
                    </ul>
                    <div className="mt-auto">
                        <div className="pt-6">
                            {/* <Link href="/login"> */}
                                <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl text-black">
                                    Sign In
                                </a>
                            {/* </Link> */}
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl" href="#">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
