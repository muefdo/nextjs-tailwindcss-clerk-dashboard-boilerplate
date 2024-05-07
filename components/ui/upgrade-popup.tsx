"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useProModal } from '@/hooks/use-pro-modal'
import { Badge } from './badge'
import { PricingPlans } from '@/public/assets'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Button } from './button'

const UpgradePopUp = () => {
    const proModal = useProModal();
    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.close}  >

            <DialogContent className='  '>
                <DialogHeader>
                    <DialogTitle className='flex flex-col justify-center items-center space-y-4 pb-2'>
                        <div className='flex items-center justify-center gap-x-2 font-mont py-1'>

                            You have to be  <Badge className='text-sm py-1'>Pro</Badge> to create ticket

                        </div>
                        <p className='text-sm font-mont-light'>No hidden fees. Pause or cancel anytime.</p>
                    </DialogTitle>
                    <DialogDescription className='space-y-2'>
                        {PricingPlans.slice(0, 2).map((plan, index) => (

                            <Card key={index} className='flex flex-col gap-2 font-mont '>
                                <CardHeader className="pb-2 ">
                                    <CardTitle className="text-xl space-y-1 ">
                                        <h3 className=' font-semibold text-lg'>{plan.type}</h3>
                                        <div className='font-mont-light text-lg'>
                                            ${plan.value}
                                        </div>
                                        <div className='text-sm  font-mont-light'>{plan.shortDesc}</div>
                                        <div className='mt-12' >
                                            <Button className='text-xs font-mont '>Select this plan</Button>
                                        </div>
                                    </CardTitle>
                                </CardHeader>


                            </Card>


                        ))}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}

export default UpgradePopUp