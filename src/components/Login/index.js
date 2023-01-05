import { React, useState, useRef } from 'react';
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
    InputGroup,
    InputRightElement,
    Icon,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useRef();

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Box mt={20}>
            <Stack spacing={5}>
                <Center mb={10}>
                    <Heading color={"#0078d7"}>Login</Heading>
                </Center>
                <form>
                    <FormControl isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>USERNAME</FormLabel>
                        <Input type='text' width={"100%"} placeholder={"Username"} size='lg' variant='filled' />
                    </FormControl>
                    <FormControl mt={"10"} isRequired>
                        <FormLabel fontSize={'20'} color={"#0078d7"}>PASSWORD</FormLabel>
                        <InputGroup>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                size="lg"
                                variant='filled'
                                onChange={event => setShowPassword(event.currentTarget.value)}
                            />
                            <InputRightElement width="3rem">
                                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                                    {showPassword ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Center mt={10} mb={"5"}>
                        <Button type='submit' bgColor={"#0078d7"} color={"white"}>Login</Button>
                    </Center>
                </form>
                <Button variant='link' bgColor={"white"} size="lg" color={"#0078d7"}>Do not have an account? Register here.</Button>
            </Stack>
        </Box>
    );
};

export default LoginForm;