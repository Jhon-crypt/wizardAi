import {
    Container,
    FormControl,
    Center,
    Button,
    Textarea,
    Box,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    Text,
} from '@chakra-ui/react'

function Wizard() {

    return (

        <>

            <Container color='white' mt={2} pt={2} id="wizard_form">

                <form>

                    <FormControl mb={5}>
                        <Textarea placeholder='E.g Write a research of 100 words on sentence structure and technical writing' required />
                    </FormControl>

                    <Center>
                        <Button mb={5} type="submit" w='100%' bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4' 
                        _hover={{ 
                            borderColor:'#5279F4',
                            backgroundColor:'#000000',
                            color:'#5279F4'
                        }}
                        >
                            Run the magic
                        </Button>
                    </Center>

                </form>

                <Box p={4} bg="#191919" borderRadius={10}>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                    <Card bg="#000000" color="white" mb={4}>
                        <CardHeader>
                            <Heading size='lg'>Topic</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack spacing='4'>
                                <Box>
                                    <Text pt='2' fontSize='lg'>
                                        View a summary of all your clients over the last month.
                                    </Text>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>

                </Box>

                <Button border='1px' borderColor='#5279F4' mb={3} bg='#5279F4' pos="fixed" bottom="20px" right="10px" borderRadius={45} 
                _hover={{ 
                    borderColor:'#5279F4',
                    backgroundColor:'#000000',
                    color:'#5279F4'
                }}
                >
                    <a href="#wizard_form">
                    Back To Top
                    </a>
                </Button>

            </Container>

            <br />

        </>

    )

}

export default Wizard