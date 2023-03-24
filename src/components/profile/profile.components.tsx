import {
    Container,
    Box,
    Center,
    Heading,
    VStack,
    Text,
    HStack,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { BiUserPin, BiUserCircle, BiCog, BiLogOutCircle } from "react-icons/bi";


function Profile() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <>

            <Container color='white' mt={10} pt={10} mb={10}>

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
                                spacing={1}
                                align='stretch'
                            >

                                <Box>

                                    <Center>

                                        <Icon as={BiUserPin} fontSize='100px' />

                                    </Center>

                                </Box>

                                <Box>

                                    <Center>

                                        <Heading as='h3' noOfLines={1}>
                                            Oladele John
                                        </Heading>

                                    </Center>

                                </Box>

                                <Box>

                                    <Center>

                                        <Text fontSize='3xl' noOfLines={1} overflowWrap='break-word'>
                                            <small>johnoladele690@gmail.com</small>
                                        </Text>

                                    </Center>

                                </Box>

                            </VStack>

                        </Center>

                    </Box>

                    <Box p={4} bg='#191919' borderRadius={10}>

                        <Center>

                            <HStack spacing='24px'>

                                <Box p={2} bg='#191919'>

                                    <Center>

                                        <Button leftIcon={<Icon as={BiCog} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                                            _hover={{
                                                borderColor: '#5279F4',
                                                backgroundColor: '#191919',
                                                color: '#5279F4'
                                            }} onClick={onOpen}>

                                            Settings

                                        </Button>

                                    </Center>

                                </Box>

                                <Box p={2} bg='#191919'>

                                    <Center>

                                        <Button leftIcon={<Icon as={BiLogOutCircle} />} bg='red' borderRadius={45} border='1px' borderColor='red'
                                            _hover={{
                                                borderColor: 'red',
                                                backgroundColor: '#191919',
                                                color: 'red'
                                            }}>

                                            Logout

                                        </Button>

                                    </Center>

                                </Box>


                            </HStack>

                        </Center>

                    </Box>
                </VStack>

            </Container>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='#191919' color='white'>
                    <ModalHeader> <Icon as={BiCog}/> Settings</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                    </ModalBody>

                    <ModalFooter>
                        <Button bg='#5279F4' mr={3} onClick={onClose} borderRadius={45} border='1px' borderColor='#5279F4'
                        _hover={{
                            borderColor: '#5279F4',
                            backgroundColor: '#191919',
                           color: '#5279F4'
                        }}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

    )

}

export default Profile