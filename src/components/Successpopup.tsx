import React from 'react'

const Successpopup = () => {
    return (
        <div
            id="toast-simple"
            className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-black bg-green-100 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-md space-x"
            role="alert"
        >
            <svg
                className="w-5 h-5 text-black rotate-45"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                />
            </svg>
            <div className="ps-4 text-sm font-normal relative">
                <div className="timeline" />
                Message sent successfully.
            </div>
        </div>
    )
}

export default Successpopup