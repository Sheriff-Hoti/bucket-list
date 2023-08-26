'use client'
import BucketCard from "@components/BucketCard";
import {Grid} from "@node_modules/@radix-ui/themes";
import {trpc} from "@app/_trpc/client";

const BucketList = () => {

    const getBuckets = trpc.getBuckets.useQuery();

    return (
        <Grid columns="5" gap="3" width="auto">
            {getBuckets?.data?.map(x =>
                <BucketCard name={x.name}/>
            )}
        </Grid>
    )
}

export default BucketList