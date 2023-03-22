import {
    Container,
    Heading,
    Text,
    Card,
    Stack,
    CardBody,
    Image,
    SimpleGrid,
    Box
} from '@chakra-ui/react'
import hero from '../../assets/wizard1.jpg'
import wizard2 from '../../assets/wizard2~2.jpg'
import wizard3 from '../../assets/wizard3.jpg'

function Features() {

    return (

        <>
            <Container maxW='container.lg' mt={10} pt={10} mb={5}>

                <SimpleGrid minChildWidth='200px' spacing='50px' spacingX='100px' spacingY='50px' >

                    <Box>

                        <Card maxW='sm' bg="#191919" color="white">
                            <CardBody>
                                <Image
                                    src={wizard2}
                                    alt='card pics'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Flexibility and interpretability </Heading>
                                    <Text>
                                        WizardAi adapts to different types of research tasks and it provides interpretable results that researchers, students, and educators can understand
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>

                    </Box>

                    <Box>

                        <Card maxW='sm' bg="#191919" color="white">
                            <CardBody>
                                <Image
                                    src={hero}
                                    alt='card pics'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Improved research capabilities</Heading>
                                    <Text>
                                        With the use of machine learning algorithms, wizardAi analyzes and understands the context of the research, and
                                        provides more accurate results.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>

                    </Box>

                    <Box>

                        <Card maxW='sm' bg="#191919" color="white">
                            <CardBody>
                                <Image
                                    src={wizard3}
                                    alt='card pics'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Absolute privacy and security</Heading>
                                    <Text>
                                        Based on the model that WizardAi is built on, it makes sure to protect the privacy of indidviduals 
                                        and ensuring that all data are handled securely.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>

                    </Box>

                </SimpleGrid>

                <br />

            </Container>

        </>


    )

}

export default Features