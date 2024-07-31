import React from 'react'

const SkeletonLoader = () => {
    return (
        <div className="p-4 bg-white rounded  w-full">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader