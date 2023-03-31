import {
    Container,
    FormControl,
    Center,
    Button,
    Textarea,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    Box,
    Stack
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import openai from '../../openai/openai'


function Wizard() {

    const handleResearch = async () => {

        try {

            const completion : any = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: "What is a fusion reactor"}],
            });
            console.log(completion.data.choices[0].message.content);

        } catch(error){

            console.log(error)

        }

    }

    handleResearch()

    return (

        <>

            <Container color='white' mt={10} pt={10} id="wizard_form">

                <form >

                    <FormControl mb={5}>
                        <Textarea placeholder='E.g Write a research of 100 words on sentence structure and technical writing' required />
                    </FormControl>

                    <Center>
                        <Button mb={5} type="submit" w='100%' bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                            _hover={{
                                borderColor: '#5279F4',
                                backgroundColor: '#000000',
                                color: '#5279F4'
                            }}
                        >
                            Run the magic
                        </Button>
                    </Center>

                </form>
            </Container>

            <Container maxW='container.sm' >

                <Box p={4} bg="#191919" borderRadius={10} mt={3}>

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

                <Box p={4} bg="#191919" borderRadius={10} mt={3}>

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

                <a href="#wizard_form">
                    <Button border='1px' borderColor='#5279F4' mb={3} bg='#5279F4' pos="fixed" bottom="20px" right="10px" borderRadius={45}
                        _hover={{
                            borderColor: '#5279F4',
                            backgroundColor: '#000000',
                            color: '#5279F4'
                        }}
                    >

                        <ArrowUpIcon />
                    </Button>
                </a>

            </Container>

            <br />

        </>

    )

}

export default Wizard