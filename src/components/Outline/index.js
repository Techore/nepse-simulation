import React from 'react';
import {
    Image,
    Flex,
    Text,
    Stack,
    Box,
    Center,
    Divider,
    VStack,
} from '@chakra-ui/react';
import LoginForm from '../Login';
import RegisterForm from '../Register';
import NEPSE_LOGO from './images/NEPSE.png';

const BoxForm = () => {
    return (
        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
            <Center>
                <Box
                    bgColor={"white"}
                    boxShadow='xl'
                    rounded='xl'
                    p={{ base: 5, sm: 5, md: 5, lg: 6, xl: 6 }}
                    m={{ base: 4, sm: 4, md: 16, lg: 25, xl: 25 }}
                    mb={'15px'}
                    minHeight="85vh"
                    minWidth={{ lg: 600, xl: 600 }}
                >
                    <Stack direction={"row"} h='100px'>
                        <Box>
                            <Image
                                alt={'NEPSE'}
                                borderRadius='full'
                                objectFit='cover'
                                align={'center'}
                                boxSize={{ base: '80px', lg: '120px', xl: '120px' }}
                                src={NEPSE_LOGO}
                                mr={5}
                                id="main-logo"
                            />
                        </Box>
                        <Divider orientation='vertical' borderColor={"grey"} />
                        <Center>
                            <VStack ml={{ base: 2, xl: 5 }}>
                                <Text fontWeight={"bold"} color={"#0078d7"} fontSize={{ base: 14, lg: 25, xl: 25 }}>NEPAL STOCK EXCHANGE</Text>
                                <Text fontWeight={"bold"} color={"#0078d7"} fontSize={{ base: 10, lg: 20, xl: 20 }}>VIRTUAL TRADING SYSTEM</Text>
                            </VStack>
                        </Center>
                    </Stack>

                    {/* <RegisterForm /> */}
                    <LoginForm />
                </Box>
            </Center>
        </Flex >
    );
};

export default BoxForm;