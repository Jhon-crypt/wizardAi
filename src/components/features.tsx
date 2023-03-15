import {
    Container,
    Heading,
    Text,
    Card,
    Stack,
    CardBody,
    Image
} from '@chakra-ui/react'
import hero from '../assets/wizard-hero.webp'

function Features() {

    return (

        <>
            <Container maxW='container.lg' mt={10} pt={10} mb={5}>

                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    bg="#191919"
                    color="white"
                    borderRadius='100px'
                    boxShadow='2xl'
                >

                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={hero}
                        alt='Caffe Latte'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='lg'>Improved research capabilities</Heading>

                            <Text as='b' py='2' maxW='32rem'>
                                With the use of machine learning algorithms, wizardAi analyzes and understands the context of the research, and 
                                provides more accurate results.
                            </Text>
                        </CardBody>
                    </Stack>

                </Card>

            </Container>

        </>


    )

}

export default Features