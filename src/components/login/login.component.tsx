import {
    Container,
    Heading,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiLogInCircle } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'

function Login() {

    return (

        <>


            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiLogInCircle} /> Login
                    </Heading>
                </Center>

                <br />

                <form>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' required/>
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' required/>
                    </FormControl>

                    <Button type="submit" w='100%' leftIcon={<Icon as={BiLogInCircle} />} bg='#5279F4' borderRadius={45} border='1px' borderColor='#5279F4'
                    _hover={{
                        borderColor: '#5279F4',
                        backgroundColor: '#000000',
                        color: '#5279F4'
                    }}>
                        Login
                    </Button>

                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Login