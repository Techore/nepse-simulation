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
    CircularProgress,
} from '@chakra-ui/react';
import axios from "axios";
import DisplayBox from './displaybox';
import ErrorMessage from './errormessage';

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [phonenumber, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [tmsURL, setTmsURL] = useState('');
    const [tms_username, setTmsUsername] = useState('');
    const [tms_password, setTmsPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
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
            setIsLoading(false);
            setSuccess(true);
            setTmsPassword(response.data.data.password);
            setTmsURL(response.data.data.tmsUrl);
            setTmsUsername(response.data.data.username);
        } catch (err) {
            setIsLoading(false);
            if (!err.response) {
                setError("No Server Response");
            } else {
                setError("Registration Failed");
            }

        }
    };

    return (
        <Box>
            {success ? <DisplayBox tmsUrl={tmsURL} username={tms_username} password={tms_password} /> : <Stack spacing={5}>
                <Center mb={5}>
                    <Heading color={"#0078d7"}>Register</Heading>
                </Center>
                <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
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
                        <Button type='submit' bgColor={"#0078d7"} color={"white"} _hover={{ bg: "#0078d7" }}>
                            {isLoading ? (<CircularProgress isIndeterminate size="24px" color="teal" />) : ('Register')}

                        </Button>
                    </Center>
                </form>
                <Button as={Link} variant='link' bgColor={"white"} size="lg" color={"#0078d7"} href="https://110.44.116.22:7125">Already have an account? Login here.</Button>
            </Stack>}


        </Box >
    );
};

export default RegisterForm;

