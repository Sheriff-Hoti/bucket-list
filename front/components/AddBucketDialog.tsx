'use client'

import {TextField} from "@radix-ui/themes"
import {ReactNode, useState} from "react";
import Modal from "@components/ui/Modal";
import {Pencil1Icon} from "@node_modules/@radix-ui/react-icons";
import {trpc} from "@app/_trpc/client";

type AddBucketDialogProps = {
    trigger: ReactNode
}

const AddBucketDialog = () => {
    const getBuckets = trpc.getBuckets.useQuery();
    const addBucket = trpc.addBucket.useMutation({
        onSettled:async () => {
            await getBuckets.refetch()
        }
    });

    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [name, setName] = useState<string>('');

    const onSaveBucket = ()=>{
        if (name.length) {
            addBucket.mutate(name);
            setName('');
        }
    }

    return (
        <Modal open={openDialog} onOpenChange={setOpenDialog}>
            <Modal.Button>
                <Pencil1Icon/>
            </Modal.Button>
            <Modal.Content
                title={'hi'}
                onSave={onSaveBucket}
            >
                <TextField.Input placeholder="Enter the name" value={name} onChange={event => setName(event.target.value)}/>
            </Modal.Content>
        </Modal>
    )
}

export default AddBucketDialog;