import {
    Container,
    Box,
    Center,
    Heading,
    VStack,
    Text,
    Divider
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BiUserPin, BiUserCircle} from "react-icons/bi";


function Profile() {

    return (

        <>

            <Container color='white' mt={10} pt={10} >

                <VStack
                    spacing={4}
                    align='stretch'
                >
                    <Box>

                        <Center>

                            <Heading as='h1' fontSize='5xl' >

                                <Icon as={BiUserCircle} /> Profile

                            </Heading>

                        </Center>

                    </Box>

                    <Box p={4} bg='#191919' borderRadius={10}>

                        <Center>

                            <VStack
                                spacing={4}
                                align='stretch'
                            >

                                <Box>

                                    <Center>

                                        <Icon as={BiUserPin} fontSize='100px' />

                                    </Center>

                                </Box>

                                <Box>

                                    <Center>

                                        <Heading as='h3'>
                                            Oladele John
                                        </Heading>

                                    </Center>

                                </Box>

                                <Divider />

                                <Box>

                                    <Center>

                                        <Text fontSize='3xl'>
                                            johnoladele690@gmail.com
                                        </Text>

                                    </Center>

                                </Box>

                            </VStack>

                        </Center>

                    </Box>

                    <Box h='40px' bg='pink.100'>
                        3
                    </Box>
                </VStack>

            </Container>

        </>

    )

}

export default Profile