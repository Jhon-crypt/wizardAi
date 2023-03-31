import {
    Container,
    Button,
    Alert,
    AlertIcon,
    Box,
    AlertDescription,
    Center,
    VStack
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiLogInCircle } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom"

function Logout() {

    return (

        <>

            <Container mt={10} pt={10} mb={10}>

                <Center>

                    <VStack
                        spacing={2}
                        align='stretch'
                    >
                        <Box>

                            <Alert status='error' mb={3} color="black" as="b" borderRadius={45} w={300}>
                                <AlertIcon />
                                <Box>
                                    <AlertDescription>
                                        <Center>
                                            You need to login to view this section, Click login below
                                        </Center>
                                    </AlertDescription>
                                </Box>
                            </Alert>

                        </Box>

                        <Box>

                            <Link to="../../Login">

                                <Button type="submit" w='100%' leftIcon={<Icon as={BiLogInCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                    _hover={{
                                        borderColor: '#5279F4',
                                        backgroundColor: '#000000',
                                        color: '#5279F4'
                                    }}>
                                    Login
                                </Button>

                            </Link>

                        </Box>

                    </VStack>

                </Center>

            </Container>

            <Outlet />

        </>

    )

}

export default Logout