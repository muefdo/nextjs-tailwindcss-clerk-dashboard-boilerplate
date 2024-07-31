import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { useProModal } from '@/hooks/use-pro-modal';
import { useRouter } from 'next/navigation';

const ProModal = ({ userType }: { userType: string }) => {
    const proModal = useProModal();
    const router = useRouter();
    return (
        <div className="md:mt-auto md:p-4">
            <Card>
                <CardHeader className=" md:pt-0 md:p-4">
                    <CardTitle className='font-mont'>{userType === null ? 'Loading...' :
                        userType === "free" ? ("Upgrade to Pro") : (
                            <p className='uppercase'>
                                {userType}
                            </p>
                        )}
                    </CardTitle>
                    <CardDescription>
                        {userType === null ? 'Loading...' : userType === 'free' ? 'Create tickets and build your project.' : (

                            "You can create tickets and build your project."
                        )}
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                    {userType === 'free' ? (
                        <Button size="sm" className="w-full" onClick={proModal.open}>
                            Upgrade
                        </Button>
                    ) : (
                        <Button size="sm" className="w-full" onClick={() => router.push("/createTicket")}>
                            Create
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default ProModal