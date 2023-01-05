import { React, useState } from 'react';
import {
    Stack,
    Box,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Heading,
} from '@chakra-ui/react';


const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(username);
    }

    return (
        <Box mt={20}>
            <Stack spacing={5}>
                <Center mb={10}>
                    <Heading color={"#0078d7"}>Register</Heading>
                </Center>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>USERNAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"Username"}
                            size='lg'
                            variant='filled'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl mt={10} isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>EMAIL</FormLabel>
                        <Input
                            type='email'
                            placeholder={"Email"}
                            size='lg'
                            variant='filled'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <Center mt={10} mb={"5"}>
                        <Button type='submit' bgColor={"#0078d7"} color={"white"} _hover={{ bg: "#0078d7" }}>Register</Button>
                    </Center>
                </form>
                <Button variant='link' bgColor={"white"} size="lg" color={"#0078d7"}>Already have an account? Login here.</Button>
            </Stack>
        </Box>
    );
};

export default RegisterForm;