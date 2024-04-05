import React, { useEffect, useState } from 'react'
import { VscLoading } from 'react-icons/vsc';

const DashSectionWrapper = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(false);
    }, []);
    if (loading) {
        return (
            <div className='h-full flex justify-center items-center text-7xl '>
                <VscLoading className='animate-spin' />
            </div>
        );
    }
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}

        </main>
    )
}

export default DashSectionWrapper