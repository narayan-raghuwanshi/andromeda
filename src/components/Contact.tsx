"use client"
import React, { useState, useRef, useEffect } from 'react'
import Loader from './Loader';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Successpopup from './Successpopup';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const form = useRef();
    const handleSubmit = async () => {
        setLoading(true);
        await emailjs.sendForm(
            'service_48n8zwr',
            'template_racbh3c',
            //@ts-ignore
            form.current,
            'o3u8-peiEIcsdkHsH')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setShowSuccessPopup(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        let timeout: any;
        if (showSuccessPopup) {
            timeout = setTimeout(() => {
                setShowSuccessPopup(false);
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [showSuccessPopup]);
    return (
        <section className="pb-28 pt-48 bg-white text-gray-50" id='contact'>
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold text-black">Contact us</h1>
                    <p className="mt-2 mb-10 pl-1 text-gray-700">Fill in the form to start a conversation</p>
                    <div className="space-y-4 pl-1">
                        <p className="flex items-center text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>info@andromedasurgical.com</span>
                        </p>
                        <div className='flex justify-between w-32'>
                            <Link href="https://twitter.com/andromedasurg" target='_blank'>
                                <Image src={"/twitter.png"} width={24} height={25} alt="twitter-logo" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/andromeda-surgical/" target='_blank'>
                                <Image src={"/linkedin.png"} width={25} height={25} alt="twitter-logo" />
                            </Link>
                            <Link href="https://www.ycombinator.com/companies/andromeda-surgical" target='_blank'>
                                <Image src={"/ycombinator.png"} width={26} height={25} alt="twitter-logo" />
                            </Link>
                        </div>
                    </div>
                </div>
                <form className="flex flex-col py-6 gap-3 md:py-0 md:px-6"
                    //@ts-ignore
                    ref={form}>
                    <label className=" text-gray-800 pl-1">Name</label>
                    <input type="text" name="user_name" placeholder="John" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
                    <label className=" text-gray-800 pl-1">Email</label>
                    <input type="email" name="user_email" placeholder="john@gmail.com" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
                    <label className=" text-gray-800 pl-1">Subject</label>
                    <input type="text" name="subject" placeholder="Have a pitch" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
                    <label className=" text-gray-800 pl-1">Message</label>
                    <input type="text" name="message" placeholder="Hi, there" className="block w-full text-black rounded-md shadow-sm bg-zinc-100 px-3 py-3" />
                    <button type="button" onClick={handleSubmit} className="self-center mt-4 bg-gray-900 text-white py-2 px-5 rounded-md hover:bg-gray-700">{loading ? <Loader text={"Connecting"} /> : "Connect"}</button>
                </form>
            </div>
            <div className='fixed bottom-0 right-0 mr-20 mb-20'>
                {showSuccessPopup && <Successpopup />}
            </div>
        </section>
    )
}

export default Contact