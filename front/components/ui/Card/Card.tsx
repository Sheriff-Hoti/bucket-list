import {Card} from "@radix-ui/themes";

type CustomCardProps = {
    asChild?: boolean
}

const CustomCard = ({
    asChild=false,

                    }:CustomCardProps) => {
    return <Card asChild={asChild}>

    </Card>
}