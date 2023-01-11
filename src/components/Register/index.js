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
    Link,
} from '@chakra-ui/react';


const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [middlename, setMiddlename] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(firstname);
        console.log(middlename);
        console.log(lastname);
    }

    return (
        <Box>
            <Stack spacing={5}>
                <Center mb={10}>
                    <Heading color={"#0078d7"}>Register</Heading>
                </Center>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>FIRST NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"First Name"}
                            size='lg'
                            variant='filled'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>MIDDLE NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"Middle Name"}
                            size='lg'
                            variant='filled'
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5} isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>LAST NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"Last Name"}
                            size='lg'
                            variant='filled'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5} isRequired>
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
                        <Button type='submit' bgColor={"#0078d7"} color={"white"} _hover={{ bg: "#0078d7" }} onClick={handleSubmit}>Register</Button>
                    </Center>
                </form>
                <Button as={Link} variant='link' bgColor={"white"} size="lg" color={"#0078d7"} href="https://www.google.com/">Already have an account? Login here.</Button>
            </Stack>
        </Box >
    );
};

export default RegisterForm;