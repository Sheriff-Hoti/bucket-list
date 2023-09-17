'use client'
import BucketList from "@app/bucket/BucketList";
import {Button} from "@node_modules/@radix-ui/themes";
import AddBucketDialog from "@components/AddBucketDialog";
import {useState} from "react";
import Modal from "@components/ui/Modal";
import {Pencil1Icon} from "@node_modules/@radix-ui/react-icons";
import {trpc} from "@app/_trpc/client";
import {grpcClient} from '@grpc-client';

const Bucket = () => {
    // const rez = grpcClient.getBuckets();
    // console.log(rez)
    const getBuckets = trpc.getBuckets.useQuery();
    const addBucket = trpc.addBucket.useMutation({
        onSettled: async () => {
            await getBuckets.refetch()
        }
    });



    return (<div>bucket page
        <AddBucketDialog/>
        <BucketList/>
    </div>)
}

export default Bucket