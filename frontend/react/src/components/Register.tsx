import {
    Box, Button, FormControl, FormLabel,
    Heading, Input, Link,
    Stack, Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React, {FormEventHandler, useState} from "react";
import {userRegister} from "../utils/api/api.flask";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)  => {
        event.preventDefault();

        const resp = userRegister({ username, email, password });
        resp.then(response => {
            console.log(`successfully registered: ${response.data.msg}`)
            window.location.pathname = '/sign-in'
        }).catch(error => {
            alert(`register request error: ${error}`)
            console.error('register request error', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign up your account</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl isRequired id="username">
                            <FormLabel>Username</FormLabel>
                            <Input type="username" onChange={event => setUsername(event.currentTarget.value)} />
                        </FormControl>
                        <FormControl isRequired id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={event => setEmail(event.currentTarget.value)} />
                        </FormControl>
                        <FormControl isRequired id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={event => setPassword(event.currentTarget.value)}  />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                type="submit"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign Up
                            </Button>
                            <Text align={'center'}>
                                Already registered? <Link href={'/sign-in'} color={'blue.400'}>Sign In!</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </form>
    );
}

export default Register;