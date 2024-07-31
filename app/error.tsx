"use client"


import Link from 'next/link'
import React from 'react'

const error = ({
    error,
    reset
}: { error: Error, reset: () => void }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Error occurred</h1>
                <p className="text-gray-700 mb-4">{"Something went wrong"}</p>
                <button onClick={reset} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Try Again
                </button>
                <p className="text-gray-600 mt-4">Go back to <Link href="/" className='underline'>home page</Link></p>
            </div>
        </div>
    )
}

export default error