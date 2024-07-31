import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import SkeletonLoader from "./skeletonLoader";

interface CardProps {
    index: number;
    value: any;
    status: string;
    subtitle: string;
}
const ProgressCard = ({ cards, totalTickets }: { cards: CardProps[], totalTickets: number }) => {
    return (
        <div className="grid md:grid-cols-2 md:gap-8 space-y-4">
            {cards.map((card, index) => (

                card.value === null ? (
                    <SkeletonLoader key={index} />
                ) : (

                    <Card key={index}>
                        <CardHeader className="pb-2">
                            <CardDescription>{card.status}</CardDescription>
                            <CardTitle className="text-4xl">{card.value}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">{card.subtitle}</div>
                        </CardContent>
                        <CardFooter>
                            {card.status !== 'All' ? <Progress value={(card.value / totalTickets) * 100} /> : ""} 
                        </CardFooter>
                    </Card>
                )


            ))}
        </div >

    )
}

export default ProgressCard;