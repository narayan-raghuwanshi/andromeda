import React from 'react'
import Image from 'next/image'
const Team = () => {
    return (
        <div className='bg-gray-200 py-12'>
            <div className='mx-auto mb-32 mt-32 max-w-7xl sm:mt-56' id='team'>
                <div className='mb-12 px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
                            Meet our team
                        </h2>
                    </div>
                </div>
                <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
                    <li className='md:flex-auto'>
                        <div className='flex flex-row items-center space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:pb-0 md:pl-0 md:pt-4'>
                            <Image className='rounded-md' src={"/profile-nick.jpg"} width={300} height={300} alt='advantages-logo' />
                            <div className='flex flex-col font-semibold ml-6'>
                                <span className='text-2xl font-semibold'>
                                    Nick Damiano
                                </span>
                                <span className='text-md text-gray-800'>
                                    Co-Founder & CEO
                                </span>
                                <span className='mt-8 text-zinc-700'>
                                    Previously founded two successful medtech companies whose products are used in over 1,000 hospitals globally.
                                </span>
                            </div>
                        </div>
                    </li>
                    <li className=''>
                        <div className='flex flex-row items-center space-y-2 border-l-4 py-2 pl-4 md:border-l-0 md:pb-0 md:pl-0 md:pt-4'>
                            <Image className='rounded-md' src={"/profile-kartik.jpg"} width={300} height={300} alt='advantages-logo' />
                            <div className='flex flex-col font-semibold ml-6'>
                                <span className='text-2xl font-semibold'>
                                    Kartik Tiwari
                                </span>
                                <span className='text-md text-gray-800'>
                                    Co-Founder & CTO
                                </span>
                                <span className='mt-8 text-zinc-700'>
                                    Autonomous vehicles expert and three-time founder who built and launched the first driverless truck.
                                </span>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Team