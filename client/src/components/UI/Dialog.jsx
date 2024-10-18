import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const DialogBox = () => {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <>
            <Group justify="center">
                <Button onClick={toggle} variant="filled" color="gray" size='lg' className='mt-4'>Take Assesment</Button>
            </Group>

            <Dialog opened={opened} withCloseButton onClose={close} size="sm" radius="md">
                <Text size="sm" mb="xs" fw={500}>
                    Sign In Required for Assessment test
                </Text>

                <Group align="flex-end">
                    <Link to={"/signin"}>
                        <Button onClick={close} variant="filled" color="red" size='md'>Sign In</Button>
                    </Link>
                </Group>
            </Dialog>
        </>
    )
}

export default DialogBox
