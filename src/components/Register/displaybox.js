import {
    Stack,
    Stat,
    VStack,
    Button,
    Center,
    Heading,
    Box,
    Text,
} from "@chakra-ui/react";
import React from "react";

export default function DisplayBox(props) {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <Box mt={"20vh"}>
            <Stat>
                <Center>
                    <Stack
                        p={10}
                        borderWidth="3px"
                        borderRadius="md"
                        direction="column"
                        align="flex-start"
                    >
                        <VStack spacing={5}>
                            <Heading color={"green"} mb={5}> SUCCESS </Heading>
                            <Text fontSize={"lg"}>Username: {props.username}</Text>
                            <Text fontSize={"lg"} > Password: {props.password}</Text>
                            <Button size="lg" color={"#0078d7"} onClick={() => openInNewTab(props.tmsUrl)}>Login here</Button>
                        </VStack>
                    </Stack>
                </Center>
            </Stat>
        </Box >

    );
}