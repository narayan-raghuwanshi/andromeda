// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMenu = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <nav className="p-4 bg-[#0A1F3A] sticky inset-x-0 z-30 w-full top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/" className="text-white font-bold text-xl">
                        <Image
                            width={110}
                            height={10}
                            src={"/logo.png"}
                            alt={"logo"} />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-10">
                    <Link href="#header"  className="text-white hover:text-gray-300 text-lg">Home</Link>
                    <Link href="#benefits"  className="text-white hover:text-gray-300 text-lg">Benefits</Link>
                    <Link href="#team"  className="text-white hover:text-gray-300 text-lg">Team</Link>
                    <Link href="#contact"  className="text-white hover:text-gray-300 text-lg">Contact Us</Link>
                </div>
                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {mobileNav && (
                <div className="md:hidden flex flex-col justify-start pl-1 mt-5 bg-[#0A1F3A]">
                    <Link href="#header" className="block text-white py-2 px-4 hover:text-gray-300 text-lg">Home</Link>
                    <Link href="#benefits" className="block text-white py-2 px-4 hover:text-gray-300 text-lg">Benefits</Link>
                    <Link href="#team" className="block text-white py-2 px-4 hover:text-gray-300 text-lg">Team</Link>
                    <Link href="#contact" className="block text-white py-2 px-4 hover:text-gray-300 text-lg">Contact Us</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
