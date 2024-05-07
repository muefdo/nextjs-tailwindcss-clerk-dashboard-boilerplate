import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"

export default function ProjectSettings() {
    return (
        <div className="space-y-5 gap-5">

            <Card className="md:w-5/12">
                <CardHeader>
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription>

                        your project name here
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Input placeholder="Store Name" />
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
            <Card className="md:w-5/12">
                <CardHeader>
                    <CardTitle>Tech Stack</CardTitle>
                    <CardDescription>
                        Tech Stack used in your project.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Input placeholder="Store Name" />
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
