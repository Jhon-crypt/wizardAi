import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Box,
    Center,
    Image,
    Button
} from '@chakra-ui/react'
import hero from '../assets/wizard-hero.webp'

function section() {

    return (

        <>

            <Container maxW='container.lg' color='white' mt={10} pt={10} centerContent>

                <Center>

                    <SimpleGrid minChildWidth='200px' spacing='50px' spacingX='100px' spacingY='50px' >
                        
                        <Box>
                            <Image src={hero} alt='Dan Abramov' />
                        </Box>

                        <Box>
                            <br /><br />
                            <Heading as='h1' size='4xl' mb={2}>
                                Research Made Easy With Ai
                            </Heading>
                            <Text fontSize='xl' maxW='32rem'>
                                Empowering students, educators, teachers and curious minds in finding answers to all research, reports and assignments.
                            </Text>
                            <Button size='lg' bg='#5179F3' mt='24px' borderRadius='45px'>
                                Create a free account
                            </Button>
                        </Box>


                    </SimpleGrid>

                </Center>

            </Container>

        </>

    )

}