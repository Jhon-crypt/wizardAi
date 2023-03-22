import {
    Container,
    FormControl,
    Text,
    Input,
    Center
} from '@chakra-ui/react'

function Wizard() {

    return (

        <>

            <Container color='white' mt={5} pt={5}>

                <form>

                    <FormControl mb={5}>
                        <Center>
                            <Text fontSize='xl'>Explore WizardAi Now</Text>
                        </Center>
                        <Input type='text' required />
                    </FormControl>

                </form>

            </Container>

        </>

    )

}

export default Wizard