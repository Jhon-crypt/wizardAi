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
                        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

                        Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>

    )

}

export default Profile