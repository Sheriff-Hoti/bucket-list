'use client'

import { Box, Card, Flex, Link, Text} from "@radix-ui/themes";

type BucketCardProps = {
    name: string
    link?: string;
    asChild?: boolean;
}

const BucketCard = ({
                        name = 'No name available',
                        link = 'No link',
                        asChild = false,
                    }: BucketCardProps) => {
    return <Card asChild onClick={() => console.log('clicked')}>
        {
            asChild ?
                <Link href={link}>
                    <BucketCardBody name={name}/>
                </Link>
                :
                <BucketCardBody name={name}/>
        }

    </Card>

}

const BucketCardBody = ({name}: Partial<BucketCardProps>) => {
    return <Flex gap="3" align="center">

        <Box>
            <Text as="div" size="2" weight="bold">
                {name}
            </Text>
            <Text as="div" size="2" color="gray">
                Engineering
            </Text>
        </Box>
    </Flex>
}

export default BucketCard