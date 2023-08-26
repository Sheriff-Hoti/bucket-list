'use client'

import {Button, Dialog, Flex, Text, TextField} from "@radix-ui/themes";
import React, {ReactNode} from "react";


type ModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode
}

const Modal = ({
                   open,
                   onOpenChange,
                   children,
               }: ModalProps) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            {children}
            {/*<Dialog.Trigger>*/}
            {/*    <Button>Edit profile</Button>*/}
            {/*</Dialog.Trigger>*/}

            {/*<Dialog.Content style={{maxWidth: 450}}>*/}
            {/*    <Dialog.Title>Edit profile</Dialog.Title>*/}
            {/*    <Dialog.Description size="2" mb="4">*/}
            {/*        Make changes to your profile.*/}
            {/*    </Dialog.Description>*/}

            {/*    <Flex direction="column" gap="3">*/}
            {/*        <label>*/}
            {/*            <Text as="div" size="2" mb="1" weight="bold">*/}
            {/*                Name*/}
            {/*            </Text>*/}
            {/*            <TextField.Input*/}
            {/*                defaultValue="Freja Johnsen"*/}
            {/*                placeholder="Enter your full name"*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <label>*/}
            {/*            <Text as="div" size="2" mb="1" weight="bold">*/}
            {/*                Email*/}
            {/*            </Text>*/}
            {/*            <TextField.Input*/}
            {/*                defaultValue="freja@example.com"*/}
            {/*                placeholder="Enter your email"*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*    </Flex>*/}

            {/*    <Flex gap="3" mt="4" justify="end">*/}
            {/*        <Dialog.Close>*/}
            {/*            <Button variant="soft" color="gray">*/}
            {/*                Cancel*/}
            {/*            </Button>*/}
            {/*        </Dialog.Close>*/}
            {/*        <Dialog.Close>*/}
            {/*            <Button>Save</Button>*/}
            {/*        </Dialog.Close>*/}
            {/*    </Flex>*/}
            {/*</Dialog.Content>*/}
        </Dialog.Root>
    );
}

type ModalContentProps = {
    title: string,
    children: ReactNode,
    onSave?: () => void;
    onCancel?: () => void;
}

const ModalContent = ({
                          title,
                          children,
                          onSave,
                          onCancel
                      }: ModalContentProps) => {
    return (
        <Dialog.Content style={{maxWidth: 450}}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description size="2" mb="4">
                Make changes to your profile.
            </Dialog.Description>

            <Flex direction="column" gap="3">
                {children}
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray" onClick={onCancel}>
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button onClick={onSave}>Save</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    )
}


Modal.Button = Dialog.Trigger
Modal.Content = ModalContent
export default Modal;