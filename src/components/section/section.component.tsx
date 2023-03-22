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
import sectionimg from '../../assets/hero3.jpg'

function Section() {

    return (

        <>

            <Container maxW='container.lg' color='white' mt={10} pt={10} mb={5} pb={5} centerContent>

                <Center>

                    <SimpleGrid minChildWidth='200px' spacing='50px' spacingX='100px' spacingY='50px' >
                        
                        <Box>
                            <Image src={sectionimg} alt='Dan Abramov' />
                        </Box>

                        <Box>
                            <br /><br />
                            <Heading as='h1' size='4xl' mb={2}>
                                Empower your curiosity with Ai now 
                            </Heading>
                            <Text fontSize='xl' maxW='32rem'>
                                Sign up to Join the AI revolution, the future of intelligence and supercharge your productivity and creativity!
                            </Text>
                            <Button size='lg' bg='#5179F3' mt='24px' borderRadius='45px'>
                                Sign up now
                            </Button>
                        </Box>


                    </SimpleGrid>

                </Center>

            </Container>

            <br /> <br />

        </>

    )

}

export default Section