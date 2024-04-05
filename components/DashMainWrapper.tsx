import React from 'react'
import DashboardNav from './DashboardNav'

const DashMainWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <DashboardNav />
            {children}
        </div>
    )
}

export default DashMainWrapper