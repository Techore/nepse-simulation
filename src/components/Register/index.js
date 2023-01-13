import { React, useState } from 'react';
import {
    Stack,
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Link,
} from '@chakra-ui/react';
import axios from "axios";
import DisplayBox from './displaybox';

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [phonenumber, setPhone] = useState('');
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://110.44.116.22:7125/tmsapi/simulation/createClient',
                {
                    firstName: firstname,
                    lastName: lastname,
                    middleName: middlename,
                    emailAddress: email,
                    phoneNumber: phonenumber
                },
                {
                    auth: {
                        username: process.env.REACT_APP_USERNAME,
                        password: process.env.REACT_APP_PASSWORD
                    }
                }

            );
            setSuccess(true);
        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else {
                setErrMsg("Registration Failed");
                console.log(err.response);
            }

        }
    };

    return (
        <Box>
            {success ? <DisplayBox tmsUrl="https://110.44.116.22:7125" username="20230107792" password="xPBBQem5" /> : <Stack spacing={5}>
                <Center mb={5}>
                    <Heading color={"#0078d7"}>Register</Heading>
                </Center>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel fontSize={{ base: '15', xl: '18' }} color={"#0078d7"}>FIRST NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"First Name"}
                            size={{ base: 'md', xl: 'lg' }}
                            variant='filled'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel fontSize={{ base: '15', xl: '18' }} color={"#0078d7"}>MIDDLE NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"Middle Name"}
                            size={{ base: 'md', xl: 'lg' }}
                            variant='filled'
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5} isRequired>
                        <FormLabel fontSize={{ base: '15', xl: '18' }} color={"#0078d7"}>LAST NAME</FormLabel>
                        <Input
                            type='text'
                            width={"100%"}
                            placeholder={"Last Name"}
                            size={{ base: 'md', xl: 'lg' }}
                            variant='filled'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5} isRequired>
                        <FormLabel fontSize={{ base: '15', xl: '18' }} color={"#0078d7"}>PHONE NUMBER</FormLabel>
                        <Input
                            type='tel'
                            width={"100%"}
                            placeholder={"Phone Number"}
                            size={{ base: 'md', xl: 'lg' }}
                            variant='filled'
                            value={phonenumber}
                            onChange={(e) => setPhone(e.target.value)} />
                    </FormControl>
                    <FormControl mt={5} isRequired>
                        <FormLabel fontSize={{ base: '15', xl: '18' }} color={"#0078d7"}>EMAIL</FormLabel>
                        <Input
                            type='email'
                            placeholder={"Email"}
                            size={{ base: 'md', xl: 'lg' }}
                            variant='filled'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <Center mt={10} mb={5}>
                        <Button type='submit' bgColor={"#0078d7"} color={"white"} _hover={{ bg: "#0078d7" }}>Register</Button>
                    </Center>
                </form>
                <Button as={Link} variant='link' bgColor={"white"} size="lg" color={"#0078d7"} href="https://110.44.116.22:7125">Already have an account? Login here.</Button>
            </Stack>}


        </Box >
    );
};

export default RegisterForm;

