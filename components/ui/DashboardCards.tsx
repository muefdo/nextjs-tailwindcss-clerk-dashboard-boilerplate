import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Activity, CreditCard, Divide, DollarSign, Users } from 'lucide-react';
import SkeletonLoader from './skeletonLoader';

interface CardProps {
    index: number;
    value: any;
    subtitle: string;
}

const DashboardCards = ({ cards }: { cards: CardProps[] }) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {cards.map((card, index) => (

                card.value === null ? (
                    <SkeletonLoader key={index} />
                ) : (<Card key={card.index} >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {card.index === 1 && "Completed Tickets"}
                            {card.index === 2 && "Active Tickets"}
                            {card.index === 3 && "Total Tickets"}
                            {card.index === 4 && "Your project"}
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <p className="text-xs text-muted-foreground">
                            {card.subtitle}
                        </p>
                    </CardContent>
                </Card>)


            ))}
        </div >
    );
};

export default DashboardCards;
