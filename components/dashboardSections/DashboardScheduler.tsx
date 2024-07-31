import React from 'react'
import { InlineWidget } from 'react-calendly'

const DashboardScheduler = () => {
    return (
        <div className='w-full h-full overflow-y-hidden'>
            <InlineWidget url='https://calendly.com/braditechmeet' />
        </div>
    )
}

export default DashboardScheduler