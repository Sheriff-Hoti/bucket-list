'use client'

import {Box, Card, Container, Flex, Link, Section} from "@radix-ui/themes";


export const Navbar = () => {
    return (
        <Section size={'1'}>
            <Card>
                <Flex gap="3" justify={'between'}>
                    <Link href="/">Home</Link>
                    <Link href="/bucket">Buckets</Link>
                </Flex>
            </Card>
        </Section>
    );
}