import {
    Container,
    Heading,
    Center,
    FormControl,
    FormLabel,
    Input,
    Button,
    Alert,
    AlertIcon
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons';
import { BiUserCircle } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { EmailIcon } from '@chakra-ui/icons';
import { LockIcon } from '@chakra-ui/icons'

function Signup() {

    return (

        <>

            <Container color='white' mt={10} pt={10}>

                <Center>
                    <Heading as="h1" size="3xl" mb={5}>
                        <Icon as={BiUserCircle} /> Signup
                    </Heading>
                </Center>

                <br />

                <form>

                    <Alert status='success' mb={3} color="black" as="b" borderRadius={45}>
                        <AlertIcon />
                        Data uploaded to the server. Fire on!
                    </Alert>

                    <FormControl mb={5}>
                        <FormLabel><Icon as={BiUser} /> Fullname</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><EmailIcon /> Email address</FormLabel>
                        <Input type='email' />
                    </FormControl>

                    <FormControl mb={5}>
                        <FormLabel><LockIcon /> Password</FormLabel>
                        <Input type='password' />
                    </FormControl>

                    <Button type="submit" w='100%' leftIcon={<Icon as={BiUserCircle} />} bg='#5279F4' borderRadius={45}>
                        Signup
                    </Button>

                </form>

            </Container>

            <br /> <br />

        </>

    )

}

export default Signup