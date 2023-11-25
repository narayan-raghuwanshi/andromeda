import React from 'react'
import Image from 'next/image'
const Benefits = () => {
    return (
        <div className='bg-gray-100 py-5 mt-12 pb-24'>
            <div className='mx-auto mb-32 mt-32 max-w-7xl sm:mt-56' id='benefits'>
                <div className='mb-12 px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='font-bold text-4xl text-gray-900 sm:text-5xl'>
                            Advantages
                        </h2>
                    </div>
                </div>
                <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <Image src={"/supercharged.svg"} width={50} height={50} alt='advantages-logo' />
                            <span className='text-xl font-semibold'>
                                Supercharged Abilities
                            </span>
                            <span className='mt-2 text-zinc-700'>
                                Achieve unparalleled accuracy and augment decisions with AI guidance to operate at world expert level every time.
                            </span>
                        </div>
                    </li>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <Image src={"/humanerror.svg"} width={96} height={50} alt='advantages-logo' />
                            <span className='text-xl font-semibold'>
                                Reduced Human Error
                            </span>
                            <span className='mt-2 text-zinc-700'>
                                Operate confidently and deliver consistently optimal patient outcomes with real-time decision support.
                            </span>
                        </div>
                    </li>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <Image src={"/effeciency.svg"} width={44} height={50} alt='advantages-logo' />
                            <span className='text-xl font-semibold'>
                                Efficiency Boost
                            </span>
                            <span className='mt-2 text-zinc-700'>
                                Streamline your procedures to reduce operating room time and avoid delays and complications.
                            </span>
                        </div>
                    </li>
                    <li className='md:flex-1'>
                        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
                            <Image src={"/userfriendly.svg"} width={50} height={50} alt='advantages-logo' />
                            <span className='text-xl font-semibold'>
                                User friendly Interface
                            </span>
                            <span className='mt-2 text-zinc-700'>
                                Designed with surgeons in mind, our interface ensures a seamless transition to robotic procedures.
                            </span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Benefits