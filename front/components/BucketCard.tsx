'use client'

import {Avatar, Box, Card, Flex, Link, Text} from "@radix-ui/themes";

type BucketCardProps = {
    name: string
}

const BucketCard = ({
                        name = 'No name available'
                    }: BucketCardProps) => {
    return <Card asChild onClick={() => console.log('clicked')}>
        <Link href={`/bucket/${encodeURIComponent(name)}`}>
            <Flex gap="3" align="center">

                <Box>
                    <Text as="div" size="2" weight="bold">
                        {name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        Engineering
                    </Text>
                </Box>
            </Flex>
        </Link>
    </Card>

}

export default BucketCard