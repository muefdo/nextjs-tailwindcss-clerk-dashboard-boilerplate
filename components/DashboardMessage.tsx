import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'

const DashboardMessage = () => {
    return (
        <Card className='h-fit'>
            <CardHeader>
                <CardTitle>Send Feedback</CardTitle>
                <CardDescription>
                    Send us a messages to improve Bradigo.
                </CardDescription>

            </CardHeader>
            <CardContent className="grid gap-8">
                <Textarea  placeholder="Enter your messages" />
                <Button>Send</Button>

            </CardContent>
        </Card>
    )
}

export default DashboardMessage